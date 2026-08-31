const C=window.SITE_CONTENT||{};
function getPath(obj,path){return path.split('.').reduce((o,k)=>o?.[k],obj)}
function applyContent(){
  document.querySelectorAll('[data-content]').forEach(el=>{const v=getPath(C,el.dataset.content);if(v!==undefined&&v!==null)el.textContent=v});
  document.querySelectorAll('[data-content-list]').forEach(el=>{const v=getPath(C,el.dataset.contentList);if(Array.isArray(v))el.innerHTML=v.map(x=>`<li>${String(x).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}</li>`).join('')});
  const y=new Date().getFullYear();document.querySelectorAll('[data-footer]').forEach(el=>el.textContent=(C.footer||'© {year} @celerku').replace('{year}',y));
}
applyContent();
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>nav?.classList.toggle('open'));
document.querySelectorAll('.nav-link[data-dropdown]').forEach(btn=>btn.addEventListener('click',e=>{if(window.innerWidth<=900){e.preventDefault();btn.closest('.nav-item').classList.toggle('open')}}));

// sparse, random rain across every page
(function makeRain(){
  const layer=document.createElement('div');layer.className='global-rain';layer.setAttribute('aria-hidden','true');
  const count=window.innerWidth<650?24:42;
  for(let i=0;i<count;i++){const d=document.createElement('i');d.style.left=(Math.random()*100)+'vw';d.style.height=(18+Math.random()*34)+'px';d.style.width=(2+Math.random()*2.2)+'px';d.style.animationDuration=(1.7+Math.random()*2.4)+'s';d.style.animationDelay=(-Math.random()*4)+'s';d.style.opacity=(.12+Math.random()*.28).toFixed(2);layer.appendChild(d)}
  document.body.prepend(layer);
})();

// reveal-on-scroll animation
const revealTargets=document.querySelectorAll('.category-card,.info-card,.status-panel,.art-card,.loose-piece,.section-heading,.page-intro,.subpage-links');
revealTargets.forEach(x=>x.classList.add('reveal'));
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');io.unobserve(e.target)}}),{threshold:.08});revealTargets.forEach(x=>io.observe(x))}else revealTargets.forEach(x=>x.classList.add('shown'));

let protectTimer;
function protectionNotice(){let n=document.querySelector('.art-protection-notice');if(!n){n=document.createElement('div');n.className='art-protection-notice';n.innerHTML='<span class="notice-pixel">✦</span><div><strong>Please don\'t download or repost my art.</strong><small>Artwork © @celerku · displayed previews are watermarked web copies ♡</small></div>';document.body.appendChild(n)}n.classList.add('show');clearTimeout(protectTimer);protectTimer=setTimeout(()=>n.classList.remove('show'),2400)}
document.addEventListener('contextmenu',e=>{if(e.target.closest('.art-thumb,.upscaled-stage,.actual-stage,.loose-image')){e.preventDefault();protectionNotice()}});
document.addEventListener('dragstart',e=>{if(e.target.matches('.art-thumb img,.upscaled-stage img,.actual-stage img,.loose-image img'))e.preventDefault()});
