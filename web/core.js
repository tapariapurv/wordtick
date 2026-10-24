// Wordtick core: shared by website, Word add-in, and (inlined by build.mjs) the Docs sidebar.
var WP=(function(){
var MODES=[
 {id:'aloud',name:'Reading Aloud',s:[100,130,160]},
 {id:'read',name:'Silent Reading',s:[150,250,400]}];
// Font Awesome Free 6.5 icons (CC BY 4.0), inlined so add-ins need no external font.
var IC={"volume-high":["0 0 640 512","M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"],"book-open":["0 0 576 512","M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"],"clock":["0 0 512 512","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"],"file-lines":["0 0 384 512","M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"],"circle-question":["0 0 512 512","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"],"table-list":["0 0 512 512","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"],"microsoft":["0 0 448 512","M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"],"google":["0 0 488 512","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};
function icon(n){var i=IC[n];return'<svg class="ic" viewBox="'+i[0]+'" aria-hidden="true" fill="currentColor"><path d="'+i[1]+'"/></svg>'}
var MODE_IC={aloud:'volume-high',read:'book-open'};
var LEVELS=['Slow','Average','Fast'];
function count(t){t=String(t||'').trim();if(/^[\d,.\s]+$/.test(t)&&/\d/.test(t))return Math.round(parseFloat(t.replace(/[,\s]/g,''))||0);return(t.match(/\S+/g)||[]).length}
function fmt(words,wpm){var s=Math.ceil(words/wpm*60-1e-9);if(s<1)return words?'under 1 sec':'0 sec';
 var h=Math.floor(s/3600),m=Math.floor(s%3600/60),r=s%60,o=[];
 if(h)o.push(h+' hr');if(m)o.push(m+' min');if(r&&!h)o.push(r+' sec');return o.join(' ')}
var LOGO='<svg class="logo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect width="128" height="128" rx="30" fill="#8be4b2"/><g fill="none" stroke="#294635" stroke-width="9" stroke-linecap="round"><path d="M30 40h40M30 64h28M30 88h40"/><circle cx="88" cy="78" r="20"/><path d="M88 66v12l8 6"/></g></svg>';
function mount(el,opt){opt=opt||{};var st={mode:'aloud',lvl:1,words:0,cw:0};
 el.classList.add('wp');if(opt.mini)el.classList.add('mini');
 el.innerHTML=(opt.mini?'<div class="hd">'+LOGO+'wordtick</div><p class="hero">turn <span class="m">words</span> into <span class="c">time</span>.</p>':'')+(opt.source?'<div class="seg src"><button data-s="sel">Use selection</button><button data-s="all">Use whole document</button></div>':'')+
 '<div class="seg" id="wp-m"></div>'+
 '<label for="wp-t">Word Count</label><textarea id="wp-t" rows="2"></textarea><small>...or paste in your text for auto-counting</small>'+
 '<label>Reading Speed</label><div class="seg" id="wp-l"></div>'+
 (opt.mini?'<label for="wp-c">Custom speed (wpm)</label><input id="wp-c" type="number" min="1" inputmode="numeric" placeholder="e.g. 180">':'')+
 '<div class="res" aria-live="polite"><span>'+icon('clock')+'Result</span><b id="wp-r">0 sec</b><span class="d" id="wp-n"></span></div>';
 var $=function(i){return el.querySelector('#'+i)},t=$('wp-t');
 function wpm(){return st.cw||MODES.find(function(m){return m.id===st.mode}).s[st.lvl]}
 function draw(){
  $('wp-m').innerHTML=MODES.map(function(m){return'<button data-m="'+m.id+'" aria-pressed="'+(m.id===st.mode)+'">'+icon(MODE_IC[m.id])+m.name+'</button>'}).join('');
  var m=MODES.find(function(x){return x.id===st.mode});
  $('wp-l').innerHTML=LEVELS.map(function(l,i){return'<button data-l="'+i+'" aria-pressed="'+(!st.cw&&i===st.lvl)+'">'+l+' ('+m.s[i]+' wpm)</button>'}).join('');
  $('wp-r').textContent=fmt(st.words,wpm());$('wp-n').textContent=st.words?st.words.toLocaleString()+(st.words===1?' word':' words'):''}
 function set(txt){t.value=txt;st.words=count(txt);draw()}
 t.oninput=function(){st.words=count(t.value);draw()};
 var c=$('wp-c');if(c)c.oninput=function(){st.cw=Math.max(0,+c.value||0);draw()};
 el.onclick=function(e){var b=e.target.closest('button');if(!b)return;
  if(b.dataset.m)st.mode=b.dataset.m;if(b.dataset.l){st.lvl=+b.dataset.l;st.cw=0;if(c)c.value=''}
  if(b.dataset.s)return opt.source(b.dataset.s,function(x){set(x);
   if(!st.words)$('wp-n').textContent=b.dataset.s==='sel'?'Select some text in your document first':'Your document is empty'});
  draw()};
 draw();return{set:set}}
return{icon:icon,MODES:MODES,count:count,fmt:fmt,mount:mount}})();
if(typeof module!=='undefined')module.exports=WP;
