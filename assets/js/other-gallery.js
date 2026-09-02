const grid=document.querySelector('#loose-gallery');const page=grid?.dataset.page;const mode=grid?.dataset.mode||'loose';
function esc(s=''){return String(s).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
async function copyName(a){if(!a.copyable)return;const text=`[[${a.title}]]`;try{await navigator.clipboard.writeText(text)}catch{const t=document.createElement('textarea');t.value=text;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove()}let toast=document.querySelector('#copy-toast');if(!toast){toast=document.createElement('div');toast.id='copy-toast';toast.className='copy-toast';document.body.appendChild(toast)}toast.textContent=`${a.title} copied to clipboard`;toast.classList.add('show');clearTimeout(window.__otherCopy);window.__otherCopy=setTimeout(()=>toast.classList.remove('show'),1800)}
function commissionedCard(a,index){const c=document.createElement('article');c.className='art-card pixel-window retro-window'+(a.copyable?' is-copyable':'');c.tabIndex=0;const media=a.file?`<img src="assets/art-web/${encodeURI(a.file)}" alt="${esc(a.title)}" draggable="false"><div class="art-watermark">@celerku</div>`:`<div class="art-placeholder"><span>✦</span><small>add art</small></div>`;c.innerHTML=`<div class="window-bar"><span class="window-dots"><i></i><i></i><i></i></span><span>commissioned avatar</span></div><div class="art-thumb">${media}</div><div class="art-info"><div><h3>${esc(a.title)}</h3><p>${esc(a.dimensions||'dimensions not set')}</p>${a.artist?`<p class="commissioner">artist · ${esc(a.artist)}</p>`:''}</div><button class="view-art" type="button" ${a.file?'':'disabled'}>VIEW</button></div><div class="card-foot"><span class="copy-hint${a.copyable?'':' disabled'}">${a.copyable?'click card to copy [[name]]':'copy disabled'}</span></div>`;c.addEventListener('click',e=>{if(!e.target.closest('.view-art'))copyName(a)});c.querySelector('.view-art').addEventListener('click',e=>{e.stopPropagation();openOther(a,true,index)});return c}
function loosePiece(a,index){const f=document.createElement('figure');f.className='loose-piece retro-window';f.innerHTML=`<button class="loose-image" type="button" aria-label="View ${esc(a.title)}"><img src="assets/art-web/${encodeURI(a.file)}" alt="${esc(a.title)}" draggable="false"><span class="loose-watermark">@celerku</span></button><figcaption><strong>${esc(a.title)}</strong>${a.artist?`<span>artist · ${esc(a.artist)}</span>`:''}${a.description?`<small>${esc(a.description)}</small>`:''}</figcaption>`;f.querySelector('.loose-image').addEventListener('click',()=>openOther(a,false,index));return f}
if(grid){
  const items=OTHER_ART.filter(x=>x.page===page);
  if(!items.length){
    if(mode==='pixel'){
      // Commissioned Avatar Artists intentionally mirrors the Pixel Art galleries,
      // including a compact placeholder card before real artwork is added.
      grid.innerHTML='';
      grid.appendChild(commissionedCard({
        title:'Example avatar',
        artist:'',
        dimensions:'52 × 52 px',
        nativeWidth:52,
        nativeHeight:52,
        file:'',
        copyable:true,
        description:''
      },0));
    }else{
      grid.innerHTML='<div class="empty-state">No artwork added here yet.<br><small>Add entries in <code>assets/js/other-data.js</code>.</small></div>';
    }
  }else{
    items.forEach((a,index)=>grid.appendChild(mode==='pixel'?commissionedCard(a,index):loosePiece(a,index)));
  }
}
function openOther(a,pixel,index){const box=document.querySelector('#other-lightbox');if(!box||!a.file)return;document.querySelector('#other-lightbox-title').textContent=`${a.title} (${Number(index)+1})`;document.querySelector('#other-lightbox-meta').textContent=[a.dimensions,a.artist?`artist · ${a.artist}`:''].filter(Boolean).join(' · ');const pv=document.querySelector('#other-viewer-pixel'),lv=document.querySelector('#other-viewer-loose');pv.hidden=!pixel;lv.hidden=pixel;const src=`assets/art-web/${a.file}`;if(pixel){const main=document.querySelector('#other-lightbox-img'),actual=document.querySelector('#other-actual-img');main.src=src;actual.src=src;if(a.nativeWidth&&a.nativeHeight){actual.style.width=a.nativeWidth+'px';actual.style.height=a.nativeHeight+'px'}else{actual.style.width='auto';actual.style.height='auto'}const pd=document.querySelector('#other-description-pixel');if(pd)pd.textContent=a.description||''}else{document.querySelector('#other-large-img').src=src;document.querySelector('#other-description').textContent=a.description||''}box.classList.add('open');box.setAttribute('aria-hidden','false')}
function closeOther(){const box=document.querySelector('#other-lightbox');box?.classList.remove('open');box?.setAttribute('aria-hidden','true')}
document.querySelector('#other-lightbox .lightbox-close')?.addEventListener('click',closeOther);document.querySelector('#other-lightbox')?.addEventListener('click',e=>{if(e.target.id==='other-lightbox')closeOther()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOther()});
