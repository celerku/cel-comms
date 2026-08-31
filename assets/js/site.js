document.querySelector('#year') && (document.querySelector('#year').textContent=new Date().getFullYear());
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
toggle?.addEventListener('click',()=>nav?.classList.toggle('open'));
document.querySelectorAll('.nav-link[data-dropdown]').forEach(btn=>btn.addEventListener('click',e=>{if(window.innerWidth<=900){e.preventDefault();btn.closest('.nav-item').classList.toggle('open')}}));
let protectTimer;
function protectionNotice(){let n=document.querySelector('.art-protection-notice');if(!n){n=document.createElement('div');n.className='art-protection-notice';n.innerHTML='<span class="notice-pixel">✦</span><div><strong>Please don\'t download or repost my art.</strong><small>Artwork © @celerku · thank you for respecting my work ♡</small></div>';document.body.appendChild(n)}n.classList.add('show');clearTimeout(protectTimer);protectTimer=setTimeout(()=>n.classList.remove('show'),2400)}
document.addEventListener('contextmenu',e=>{if(e.target.closest('.art-thumb,.upscaled-stage,.actual-stage,.loose-image')){e.preventDefault();protectionNotice()}});
document.addEventListener('dragstart',e=>{if(e.target.matches('.art-thumb img,.upscaled-stage img,.actual-stage img,.loose-image img'))e.preventDefault()});
