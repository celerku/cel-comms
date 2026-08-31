const wrap=document.querySelector('#premade-gallery'),empty=document.querySelector('#premade-empty');
const premades=ARTWORKS.filter(a=>a.premade);
function esc(s=''){return String(s).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
if(premades.length){
  empty.style.display='none';
  premades.forEach(a=>{
    const c=document.createElement('article');c.className='art-card pixel-window';
    c.innerHTML=`<div class="window-bar"><span class="window-dots"><i></i><i></i><i></i></span><span>premade</span></div><div class="art-thumb">${a.file?`<img src="assets/art/${encodeURI(a.file)}" alt="${esc(a.title)}" draggable="false"><div class="art-watermark">@celerku</div>`:'<div class="art-placeholder">✦<small>add art</small></div>'}</div><div class="art-info"><div><h3>${esc(a.title)}</h3><p>${esc(a.dimensions||'dimensions not set')}</p>${a.commissioner?`<p class="commissioner">commissioner · ${esc(a.commissioner)}</p>`:''}</div></div>`;
    wrap.appendChild(c);
  });
}else{wrap.style.display='none'}
