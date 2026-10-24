// Wordtick core: shared by website, Word add-in, and (inlined by build.mjs) the Docs sidebar.
var WP=(function(){
var MODES=[
 {id:'aloud',name:'Reading Aloud',s:[100,130,160]},
 {id:'read',name:'Silent Reading',s:[150,250,400]}];
var LEVELS=['Slow','Average','Fast'];
function count(t){t=String(t||'').trim();if(/^[\d,.\s]+$/.test(t)&&/\d/.test(t))return Math.round(parseFloat(t.replace(/[,\s]/g,''))||0);return(t.match(/\S+/g)||[]).length}
function fmt(words,wpm){var s=Math.ceil(words/wpm*60-1e-9);if(s<1)return words?'under 1 sec':'0 sec';
 var h=Math.floor(s/3600),m=Math.floor(s%3600/60),r=s%60,o=[];
 if(h)o.push(h+' hr');if(m)o.push(m+' min');if(r&&!h)o.push(r+' sec');return o.join(' ')}
function mount(el,opt){opt=opt||{};var st={mode:'aloud',lvl:1,words:0};
 el.classList.add('wp');if(opt.mini)el.classList.add('mini');
 el.innerHTML=(opt.source?'<div class="seg src"><button data-s="sel">Use selection</button><button data-s="all">Use whole document</button></div>':'')+
 '<div class="seg" id="wp-m"></div>'+
 '<label for="wp-t">Word Count</label><textarea id="wp-t" rows="2"></textarea><small>...or paste in your text for auto-counting</small>'+
 '<label>Reading Speed</label><div class="seg" id="wp-l"></div>'+
 '<div class="res" aria-live="polite"><span>Result</span><b id="wp-r">0 sec</b><span class="d" id="wp-n"></span></div>';
 var $=function(i){return el.querySelector('#'+i)},t=$('wp-t');
 function wpm(){return MODES.find(function(m){return m.id===st.mode}).s[st.lvl]}
 function draw(){
  $('wp-m').innerHTML=MODES.map(function(m){return'<button data-m="'+m.id+'" aria-pressed="'+(m.id===st.mode)+'">'+m.name+'</button>'}).join('');
  var m=MODES.find(function(x){return x.id===st.mode});
  $('wp-l').innerHTML=LEVELS.map(function(l,i){return'<button data-l="'+i+'" aria-pressed="'+(i===st.lvl)+'">'+l+' ('+m.s[i]+' wpm)</button>'}).join('');
  $('wp-r').textContent=fmt(st.words,wpm());$('wp-n').textContent=st.words?st.words.toLocaleString()+(st.words===1?' word':' words'):''}
 function set(txt){t.value=txt;st.words=count(txt);draw()}
 t.oninput=function(){st.words=count(t.value);draw()};
 el.onclick=function(e){var b=e.target.closest('button');if(!b)return;
  if(b.dataset.m)st.mode=b.dataset.m;if(b.dataset.l)st.lvl=+b.dataset.l;
  if(b.dataset.s)return opt.source(b.dataset.s,set);
  draw()};
 draw();return{set:set}}
return{MODES:MODES,count:count,fmt:fmt,mount:mount}})();
if(typeof module!=='undefined')module.exports=WP;
