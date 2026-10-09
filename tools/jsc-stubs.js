// ตัวจำลอง DOM/เบราว์เซอร์ขั้นต่ำ สำหรับรันเกมใน JavaScriptCore (jsc) ของ macOS — ไม่ใช่โค้ดของเกม

var __timers=[], __now=0, __seq=0;
function setTimeout(f,ms){ __timers.push({t:__now+(ms||0),f,s:__seq++}); return __seq; }
function runTimers(limit){ let n=0; while(__timers.length && n++<limit){ __timers.sort((a,b)=>a.t-b.t||a.s-b.s); const x=__timers.shift(); __now=x.t; x.f(); } return __timers.length; }
function El(){ return {style:{},classList:{add(){},remove(){}},dataset:{},innerHTML:'',textContent:'',clientWidth:460,
  appendChild(){},remove(){},querySelectorAll(){return []},getBoundingClientRect(){return {left:0,top:0,width:10,height:10}},setPointerCapture(){}}; }
var __app=El();
var document={ querySelector(s){ return s==='#app'?__app:(s==='#modal'?null:El()); }, createElement(){return El()}, body:El() };
var __ls={}; var localStorage={getItem(k){return __ls[k]||null},setItem(k,v){__ls[k]=v},clear(){__ls={}}};
var window=this;
var innerWidth=390,innerHeight=800;
var __b64='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function btoa(s){ let o='',i=0; while(i<s.length){ const a=s.charCodeAt(i++),b=s.charCodeAt(i++),c=s.charCodeAt(i++); const x=a<<16|(b||0)<<8|(c||0); o+=__b64[x>>18&63]+__b64[x>>12&63]+(isNaN(b)?'=':__b64[x>>6&63])+(isNaN(c)?'=':__b64[x&63]); } return o; }
function atob(s){ s=s.replace(/=+$/,''); let o='',bits=0,v=0; for(const ch of s){ v=v<<6|__b64.indexOf(ch); bits+=6; if(bits>=8){ bits-=8; o+=String.fromCharCode(v>>bits&255); } } return o; }
var location={reload(){print('RELOAD')},protocol:'file:'};
function confirm(){return true}



__app.querySelector=function(){return null};
__app.querySelector=function(){return null};

__app.querySelector=function(){return null};

__app.querySelector=function(){return null};

__app.querySelector=function(){return null};

__app.querySelector=function(){return null};

__app.querySelector=function(){return null};
