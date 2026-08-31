document.querySelector('#year')?.append(new Date().getFullYear());
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));

// Gentle artwork protection. This discourages casual saving, but no browser-side
// method can completely prevent copying an image that is visible on a webpage.
const protectableImageSelector='.art-thumb img, .upscaled-stage img, .actual-stage img';
let protectTimer;
function showArtNotice(){
  let notice=document.querySelector('#art-protection-notice');
  if(!notice){
    notice=document.createElement('div');
    notice.id='art-protection-notice';
    notice.className='art-protection-notice';
    notice.setAttribute('role','status');
    notice.setAttribute('aria-live','polite');
    notice.innerHTML=`<span class="notice-pixel">✦</span><div><strong>Please don’t download or repost my art.</strong><small>Artwork © @celerku · thank you for respecting my work ♡</small></div>`;
    document.body.appendChild(notice);
  }
  notice.classList.add('show');
  clearTimeout(protectTimer);
  protectTimer=setTimeout(()=>notice.classList.remove('show'),2800);
}

document.addEventListener('contextmenu',e=>{
  if(e.target.matches?.(protectableImageSelector)){
    e.preventDefault();
    showArtNotice();
  }
});
document.addEventListener('dragstart',e=>{
  if(e.target.matches?.(protectableImageSelector)) e.preventDefault();
});
