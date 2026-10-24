// WordPace core: shared by website, Word add-in, and (inlined by build.mjs) the Docs sidebar.
var WP=(function(){
var MODES=[
 {id:'read',name:'Silent reading',s:[200,238,300]},
 {id:'aloud',name:'Reading aloud',s:[100,130,160]},
 {id:'talk',name:'Presenting',s:[90,120,150]},
 {id:'type',name:'Typing',s:[25,40,65]},
 {id:'write',name:'Handwriting',s:[13,20,30]}];
var LEVELS=['Slow','Average','Fast'];
function count(t){t=String(t||'').trim();if(/^[\d,.\s]+$/.test(t)&&/\d/.test(t))return Math.round(parseFloat(t.replace(/[,\s]/g,''))||0);return(t.match(/\S+/g)||[]).length}
function fmt(words,wpm){var s=Math.round(words/wpm*60);if(s<1)return words?'under 1 sec':'0 sec';
 var h=Math.floor(s/3600),m=Math.floor(s%3600/60),r=s%60,o=[];
 if(h)o.push(h+' hr');if(m)o.push(m+' min');if(r&&!h)o.push(r+' sec');return o.join(' ')}
function mount(el,opt){opt=opt||{};var st={mode:'read',lvl:1,words:0,custom:0};
 el.classList.add('wp');if(opt.mini)el.classList.add('mini');
 el.innerHTML=(opt.source?'<div class="src"><button data-s="sel">Selected text</button><button data-s="all">Whole document</button></div>':'')+
 '<label for="wp-t">Paste your text, or type a word count</label><textarea id="wp-t" placeholder="Paste text here, or type a number like 1500"></textarea><small id="wp-n"></small>'+
 '<label>What are you timing?</label><div class="seg" id="wp-m"></div>'+
 '<label>How fast?</label><div class="seg" id="wp-l"></div>'+
 '<label for="wp-c">Or set your own speed (words per minute)</label><input id="wp-c" type="number" min="1" inputmode="numeric" placeholder="e.g. 180">'+
 '<div class="res" aria-live="polite"><b id="wp-r">0 sec</b><span id="wp-d"></span></div>';
 var $=function(i){return el.querySelector('#'+i)},t=$('wp-t');
 function wpm(){return st.custom>0?st.custom:MODES.find(function(m){return m.id===st.mode}).s[st.lvl]}
 function draw(){
  $('wp-m').innerHTML=MODES.map(function(m){return'<button data-m="'+m.id+'" aria-pressed="'+(m.id===st.mode)+'">'+m.name+'</button>'}).join('');
  var m=MODES.find(function(x){return x.id===st.mode});
  $('wp-l').innerHTML=LEVELS.map(function(l,i){return'<button data-l="'+i+'" aria-pressed="'+(st.custom<=0&&i===st.lvl)+'">'+l+'<br><small>'+m.s[i]+' wpm</small></button>'}).join('');
  $('wp-n').textContent=st.words.toLocaleString()+(st.words===1?' word':' words');
  $('wp-r').textContent=fmt(st.words,wpm());$('wp-d').textContent=st.words?'at '+wpm()+' words per minute':'Add some words to begin'}
 function set(txt){t.value=txt;st.words=count(txt);draw()}
 t.oninput=function(){st.words=count(t.value);draw()};
 $('wp-c').oninput=function(e){st.custom=+e.target.value||0;draw()};
 el.onclick=function(e){var b=e.target.closest('button');if(!b)return;
  if(b.dataset.m)st.mode=b.dataset.m,st.custom=0,$('wp-c').value='';
  if(b.dataset.l)st.lvl=+b.dataset.l,st.custom=0,$('wp-c').value='';
  if(b.dataset.s)return opt.source(b.dataset.s,set);
  draw()};
 draw();return{set:set,wpm:function(){return wpm()}}}
return{MODES:MODES,count:count,fmt:fmt,mount:mount}})();
if(typeof module!=='undefined')module.exports=WP;
