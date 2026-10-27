// Website only (never loaded by the Docs/Word add-ons): Google AdSense with a visible notice and opt-out.
(function(){
var K='wt-ads',CL='ca-pub-7220839675839734';
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function put(v){try{localStorage.setItem(K,v)}catch(e){}}
function load(){var s=document.createElement('script');s.async=true;s.crossOrigin='anonymous';
 s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+CL;document.head.appendChild(s)}
document.head.insertAdjacentHTML('beforeend','<style>'+
 '.wt-ad{position:fixed;left:16px;right:16px;bottom:16px;z-index:50;max-width:520px;margin:0 auto;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:var(--rl);padding:16px 20px;box-shadow:0 8px 30px rgba(0,0,0,.12);font-size:.95rem;transition:opacity .2s var(--ease),transform .2s var(--ease)}'+
 '.wt-ad[hidden]{display:block;opacity:0;transform:translateY(8px);pointer-events:none}'+
 '.wt-ad p{margin:0 0 12px}.wt-ad a{color:inherit}.wt-ad .seg button{padding:8px 14px}'+
 '.wt-ad button.go{background:var(--mint);color:#000}'+
 '@media(prefers-reduced-motion:reduce){.wt-ad{transition:none}}</style>');
var box;
function open(){var off=get()==='off';
 if(!box){box=document.createElement('div');box.className='wt-ad';box.setAttribute('role','dialog');box.setAttribute('aria-label','Ads notice');box.hidden=true;document.body.appendChild(box)}
 box.innerHTML='<p>'+(off?'Ads are turned off for you on this browser.':'Wordtick is free because it shows a few ads from Google, which may use cookies. Your text is never shared with them.')+' <a href="privacy.html#ads">Learn more</a></p>'+
  '<div class="seg"><button class="go" data-a="'+(off?'on':'ok')+'">'+(off?'Turn ads back on':'Sounds good')+'</button><button data-a="'+(off?'ok':'off')+'">'+(off?'Keep them off':'Turn off ads')+'</button></div>';
 box.onclick=function(e){var a=e.target.dataset&&e.target.dataset.a;if(!a)return;
  if(a==='off'){put('off');return location.reload()}
  if(a==='on'){put('ok');return location.reload()}
  if(!off)put('ok');box.hidden=true};
 requestAnimationFrame(function(){box.hidden=false})}
window.WTads={open:open};
if(get()!=='off')load();
if(!get())document.readyState==='loading'?document.addEventListener('DOMContentLoaded',open):open();
})();
