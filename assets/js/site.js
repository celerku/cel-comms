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
document.querySelectorAll('.nav-drop-toggle[data-dropdown]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();btn.closest('.nav-item')?.classList.toggle('open')}));
document.addEventListener('click',e=>{if(!e.target.closest('.nav-item'))document.querySelectorAll('.nav-item.open').forEach(x=>x.classList.remove('open'))});
// keep collapse symbols friendly and obvious
function syncCollapse(d){const mark=d.querySelector(':scope > summary .collapse-mark');if(mark)mark.textContent=d.open?'−':'+'}
document.querySelectorAll('.gallery-section,.collapsible-info').forEach(d=>{syncCollapse(d);d.addEventListener('toggle',()=>syncCollapse(d))});
// sparse, chunky rain across every page
(function makeRain(){const layer=document.createElement('div');layer.className='global-rain';layer.setAttribute('aria-hidden','true');const count=window.innerWidth<650?16:29;for(let i=0;i<count;i++){const d=document.createElement('i');d.style.left=(Math.random()*100)+'vw';d.style.height=(22+Math.random()*46)+'px';d.style.width=(2.4+Math.random()*2.8)+'px';d.style.animationDuration=(2.15+Math.random()*3.25)+'s';d.style.animationDelay=(-Math.random()*6)+'s';d.style.opacity=(.11+Math.random()*.25).toFixed(2);d.style.transform=`translateY(-90px) rotate(${8+Math.random()*8}deg)`;layer.appendChild(d)}document.body.prepend(layer)})();
// soft reveal animations
const revealTargets=document.querySelectorAll('.category-card,.info-card,.status-panel,.art-card,.loose-piece,.section-heading,.page-intro,.subpage-links,.gallery-section');
revealTargets.forEach(x=>x.classList.add('reveal'));
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');io.unobserve(e.target)}}),{threshold:.06});revealTargets.forEach(x=>io.observe(x))}else revealTargets.forEach(x=>x.classList.add('shown'));
// every visible image on the site gets the same right-click warning
let protectTimer;
function protectionNotice(){let n=document.querySelector('.art-protection-notice');if(!n){n=document.createElement('div');n.className='art-protection-notice';n.innerHTML='<span class="notice-pixel">✦</span><div><strong>Please don\'t download or repost my art.</strong><small>Artwork © @celerku · thank you for respecting my work ♡</small></div>';document.body.appendChild(n)}n.classList.add('show');clearTimeout(protectTimer);protectTimer=setTimeout(()=>n.classList.remove('show'),2400)}
document.addEventListener('contextmenu',e=>{if(e.target.tagName==='IMG'){e.preventDefault();protectionNotice()}});
document.addEventListener('dragstart',e=>{if(e.target.tagName==='IMG')e.preventDefault()});
// highlight current Other subpage
const current=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('[data-subpage]').forEach(a=>{if(a.dataset.subpage===current)a.classList.add('active')});
