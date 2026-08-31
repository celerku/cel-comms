const labels={all:'All','static-custom':'Static Custom','food-series':'Food Series',spinning:'Spinning',wiggly:'Wiggly','simple-animated':'Simple Animated','custom-animated':'Custom Animated',sprites:'Sprites','pixel-headshots':'Pixel Headshots'};
const filters=document.querySelector('#filters'),gallery=document.querySelector('#gallery');
let active='all';

function esc(s=''){return String(s).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
function renderFilters(){if(!filters)return;Object.entries(labels).forEach(([key,label])=>{const b=document.createElement('button');b.className='filter-btn'+(key==='all'?' active':'');b.textContent=label;b.onclick=()=>{active=key;document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderGallery()};filters.appendChild(b)})}

async function copyName(a){
  if(!a.copyable)return;
  const text=`[[${a.title}]]`;
  try{await navigator.clipboard.writeText(text)}catch{const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove()}
  showCopyToast(`${a.title} copied to clipboard`);
}
function showCopyToast(message){let t=document.querySelector('#copy-toast');if(!t){t=document.createElement('div');t.id='copy-toast';t.className='copy-toast';document.body.appendChild(t)}t.textContent=message;t.classList.add('show');clearTimeout(window.__copyTimer);window.__copyTimer=setTimeout(()=>t.classList.remove('show'),1800)}

function card(a){
  const c=document.createElement('article');c.className='art-card pixel-window'+(a.copyable?' is-copyable':'');c.tabIndex=0;
  const media=a.file?`<img src="assets/art/${encodeURI(a.file)}" alt="${esc(a.title)}" draggable="false"><div class="art-watermark">@celerku</div>`:`<div class="art-placeholder"><span>✦</span><small>add art</small></div>`;
  const commissioner=a.commissioner?`<p class="commissioner">commissioner · ${esc(a.commissioner)}</p>`:'';
  const copyHint=a.copyable?`<span class="copy-hint">click card to copy name</span>`:`<span class="copy-hint disabled">copy disabled</span>`;
  c.innerHTML=`<div class="window-bar"><span class="window-dots"><i></i><i></i><i></i></span><span>${esc(labels[a.category]||a.category)}</span></div><div class="art-thumb">${media}</div><div class="art-info"><div><h3>${esc(a.title)}</h3><p>${esc(a.dimensions||'dimensions not set')}</p>${commissioner}</div><button class="view-art" type="button" ${a.file?'':'disabled'}>VIEW</button></div><div class="card-foot">${copyHint}</div>`;
  c.addEventListener('click',e=>{if(e.target.closest('.view-art'))return;copyName(a)});
  c.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('.view-art')){e.preventDefault();copyName(a)}});
  c.querySelector('.view-art').addEventListener('click',e=>{e.stopPropagation();openLightbox(a)});
  return c;
}
function renderGallery(){if(!gallery)return;gallery.innerHTML='';ARTWORKS.filter(a=>active==='all'||a.category===active).forEach(a=>gallery.appendChild(card(a)))}
function openLightbox(a){if(!a.file)return;const box=document.querySelector('#lightbox'),src=`assets/art/${a.file}`;document.querySelector('#lightbox-img').src=src;document.querySelector('#actual-img').src=src;document.querySelector('#lightbox-title').textContent=a.title;document.querySelector('#lightbox-meta').textContent=[a.dimensions,a.commissioner?`commissioner · ${a.commissioner}`:''].filter(Boolean).join(' · ');box.classList.add('open');box.setAttribute('aria-hidden','false')}
function closeLightbox(){const box=document.querySelector('#lightbox');box?.classList.remove('open');box?.setAttribute('aria-hidden','true')}
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);document.querySelector('#lightbox')?.addEventListener('click',e=>{if(e.target.id==='lightbox')closeLightbox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});
renderFilters();renderGallery();
