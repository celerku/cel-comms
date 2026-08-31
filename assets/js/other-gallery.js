const grid=document.querySelector('#loose-gallery');
const page=grid?.dataset.page;
function esc(s=''){return String(s).replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]))}
if(grid){
 const items=OTHER_ART.filter(x=>x.page===page);
 if(!items.length){grid.innerHTML='<div class="empty-state">No artwork added here yet.<br><small>Add entries in <code>assets/js/other-data.js</code>.</small></div>'}
 else items.forEach(a=>{const f=document.createElement('figure');f.className='loose-piece';f.innerHTML=`<div class="loose-image"><img src="assets/art-web/${encodeURI(a.file)}" alt="${esc(a.title)}" draggable="false"><span class="loose-watermark">@celerku</span></div><figcaption><strong>${esc(a.title)}</strong>${a.artist?`<span>${esc(a.artist)}</span>`:''}${a.note?`<small>${esc(a.note)}</small>`:''}</figcaption>`;grid.appendChild(f)})
}
