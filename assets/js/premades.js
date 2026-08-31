const wrap=document.querySelector('#premade-gallery'),empty=document.querySelector('#premade-empty');
const premades=ARTWORKS.filter(a=>a.premade);
if(premades.length){empty.style.display='none';premades.forEach(a=>{const c=document.createElement('article');c.className='art-card';c.innerHTML=`<div class="art-thumb">${a.file?`<img src="assets/art/${a.file}" alt="${a.title}"><div class="art-watermark">@celerku</div>`:'<div class="art-placeholder">✦</div>'}</div><div class="art-info"><h3>${a.title}</h3><p>${a.meta||'Premade'}</p></div>`;wrap.appendChild(c)})}else{wrap.style.display='none'}
