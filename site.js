const C=window.SITE_CONTENT||{};
function getPath(obj,path){return path.split('.').reduce((o,k)=>o?.[k],obj)}
function applyContent(){
  document.querySelectorAll('[data-content]').forEach(el=>{const v=getPath(C,el.dataset.content);if(v!==undefined&&v!==null)el.textContent=v});
  document.querySelectorAll('[data-content-list]').forEach(el=>{const v=getPath(C,el.dataset.contentList);if(Array.isArray(v))el.innerHTML=v.map(x=>`<li>${String(x).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}</li>`).join('')});
  const y=new Date().getFullYear();document.querySelectorAll('[data-footer]').forEach(el=>el.textContent=(C.footer||'© {year} @celerku').replace('{year}',y));
}
applyContent();
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');

function closeMobileMenu(){
  if(!nav || !toggle) return;
  nav.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Open navigation');
  toggle.textContent='☰';
  document.body.classList.remove('mobile-menu-open');
}

function openMobileMenu(){
  if(!nav || !toggle || window.innerWidth>900) return;
  nav.classList.add('open');
  toggle.classList.add('open');
  toggle.setAttribute('aria-expanded','true');
  toggle.setAttribute('aria-label','Close navigation');
  toggle.textContent='×';
  document.body.classList.add('mobile-menu-open');
}

// Always initialise CLOSED on load.
closeMobileMenu();

toggle?.addEventListener('click',e=>{
  e.preventDefault();
  e.stopPropagation();
  if(nav?.classList.contains('open')) closeMobileMenu();
  else openMobileMenu();
});

nav?.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{
    if(window.innerWidth<=900) closeMobileMenu();
  });
});

document.addEventListener('pointerdown',e=>{
  if(window.innerWidth>900 || !nav?.classList.contains('open')) return;
  if(nav.contains(e.target) || toggle?.contains(e.target)) return;
  closeMobileMenu();
},true);

document.addEventListener('keydown',e=>{
  if(e.key==='Escape') closeMobileMenu();
});

window.addEventListener('resize',()=>{
  if(window.innerWidth>900) closeMobileMenu();
});

// Sparse pixel starfield + occasional shooting stars across every page.
(function makeStarfield(){
  const layer=document.createElement('div');
  layer.className='global-stars';
  layer.setAttribute('aria-hidden','true');

  const ambientCount=window.innerWidth<650?28:58;
  for(let i=0;i<ambientCount;i++){
    const star=document.createElement('i');
    star.className='ambient-star';
    star.style.left=(Math.random()*100)+'vw';
    star.style.top=(Math.random()*100)+'vh';
    const size=Math.random()<.78?2:(Math.random()<.85?3:4);
    star.style.width=size+'px';
    star.style.height=size+'px';
    star.style.opacity=(.08+Math.random()*.28).toFixed(2);
    star.style.animationDuration=(3.5+Math.random()*7)+'s';
    star.style.animationDelay=(-Math.random()*9)+'s';
    layer.appendChild(star);
  }

  const shooterCount=window.innerWidth<650?3:5;
  for(let i=0;i<shooterCount;i++){
    const star=document.createElement('i');
    star.className='shooting-star';
    star.style.left=(8+Math.random()*72)+'vw';
    star.style.top=(4+Math.random()*55)+'vh';
    star.style.setProperty('--travel',(120+Math.random()*180)+'px');
    star.style.setProperty('--trail',(45+Math.random()*70)+'px');
    star.style.animationDuration=(5.8+Math.random()*6.5)+'s';
    star.style.animationDelay=(-Math.random()*14)+'s';
    layer.appendChild(star);
  }
  document.body.prepend(layer);
})();
// Fade elements in whenever they enter the viewport and back out when they leave, in either scroll direction.
const revealTargets=document.querySelectorAll('.category-card,.info-card,.status-panel,.art-card,.loose-piece,.section-heading,.page-intro,.subpage-links,.single-category-gallery,.pixel-category-directory');
revealTargets.forEach(x=>x.classList.add('reveal','fade-below'));
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    const el=entry.target;
    if(entry.isIntersecting){
      el.classList.add('shown');
      el.classList.remove('fade-above','fade-below');
    }else{
      el.classList.remove('shown');
      const r=entry.boundingClientRect;
      if(r.bottom < 0){el.classList.add('fade-above');el.classList.remove('fade-below')}
      else {el.classList.add('fade-below');el.classList.remove('fade-above')}
    }
  }),{threshold:.08,rootMargin:'0px 0px -4% 0px'});
  revealTargets.forEach(x=>io.observe(x));
}else revealTargets.forEach(x=>x.classList.add('shown'));
// Robust right-click protection on every art/image surface, including dynamically-created lightboxes.
let protectTimer;
function protectionNotice(){let n=document.querySelector('.art-protection-notice');if(!n){n=document.createElement('div');n.className='art-protection-notice';n.innerHTML='<span class="notice-pixel">✦</span><div><strong>Please don\'t download or repost my art.</strong><small>Artwork © @celerku · thank you for respecting my work ♡</small></div>';document.body.appendChild(n)}n.classList.add('show');clearTimeout(protectTimer);protectTimer=setTimeout(()=>n.classList.remove('show'),2400)}
const protectedSelector='img, .art-card, .art-thumb, .loose-piece, .loose-image, .art-viewer, .viewer-stage, .large-other-stage, .upscaled-stage, .actual-stage, .hero-decor-bare, .page-decor-slot, .directory-example';
function isProtectedArtTarget(target){
  return !!(target && target.closest && target.closest(protectedSelector));
}
document.addEventListener('contextmenu',e=>{
  if(!isProtectedArtTarget(e.target)) return;
  e.preventDefault();
  e.stopImmediatePropagation();
  protectionNotice();
},true);
document.addEventListener('dragstart',e=>{
  if(!isProtectedArtTarget(e.target)) return;
  e.preventDefault();
  e.stopImmediatePropagation();
},true);
// Delegation from document means art inserted later by gallery/lightbox scripts is protected too.
const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('[data-subpage]').forEach(a=>{if(a.dataset.subpage===current)a.classList.add('active')});


// V11.4: force-remove decorative pseudo-element window labels at runtime.
// This intentionally overrides even an older cached stylesheet.
(function removeLegacyWindowLabels(){
  const style=document.createElement('style');
  style.id='remove-legacy-window-labels';
  style.textContent=`
    .category-card::after,
    .info-card::after,
    .status-panel::after{
      content:none !important;
      display:none !important;
      background:none !important;
      box-shadow:none !important;
    }
  `;
  document.head.appendChild(style);
})();
