// ชุดทดสอบควัน: เรนเดอร์ทุกหน้า เล่นรอบจำลอง รับรางวัล ฟอร์มความเห็น ฯลฯ — พิมพ์ 'ERRORS 0' เมื่อผ่าน
globalThis.fetch=function(){return Promise.resolve()};
var __ins=''; __app.querySelector=function(){ return {insertAdjacentHTML(w,h){__ins=h}} }; document.querySelectorAll=function(){return []};
globalThis.URLSearchParams=function(){ this.append=function(){} };
var errs=[]; function T(n,f){ try{f()}catch(e){errs.push(n+': '+e.message+' @ '+(e.stack||'').split('\n')[0])} }
const _ce=document.createElement; document.createElement=function(){ const e=_ce(); e.style.setProperty=function(){}; e.remove=function(){}; return e; };
T('welcome',()=>{ runTimers(5); showWelcome(); wPage=1; showWelcome(); wPage=2; showWelcome(); endWelcome(false); print('welcome done',tut().welcome); });
SAVE.tut={welcome:true,combat:false,hints:{}};
T('combat tour',()=>{ screen='title'; render(); beginArcana(); newRun(AR); G.stage=2; G.doors=[{t:'fight',eid:'goblin'}]; chooseDoor(0); runTimers(5); print('tour flag',tut().combat);
  window.coachNext && window.coachNext(); window.coachNext(); window.coachSkip(); });
T('hints',()=>{ hint('a','ทดสอบ'); hint('a','ซ้ำ'); print('hints',JSON.stringify(tut().hints)); });
T('feedback',()=>{ showFeedback(); FB.rating=4; FB.tags=['ความยาก']; FB.text='ทดสอบ <b>'; print(fbText().slice(0,120)); submitFeedback(); SAVE.fbLast=0; FEEDBACK.formUrl='x'; globalThis.fetch=()=>Promise.resolve(); FB.rating=0; FB.tags=[]; FB.text=''; submitFeedback(); FB.text='ok'; submitFeedback(); runTimers(5); feedbackDone(true); resetTutorial(); showSettings(); screen='over'; G.earn={dust:1,gems:1,tickets:0,coins:1,exp:1,mult:1,lvUp:0}; G.tier=1; G.stage=2; render(); });

T('screens',()=>{ SAVE.tut={welcome:true,combat:true,hints:{}}; for(const sc of ['title','hero','shrine','book','forge','amulets','tower','quests','arcana']){ screen=sc; if(sc==='arcana') beginArcana(); render(); }
  QT='a'; screen='quests'; render(); QT='q'; render(); print('quests ok', __ins.slice(0,60)); });
T('picker',()=>{ pickKit(0); kitFilter('role','atk'); kitFilter('suit','wands'); kitFilter('role','all'); kitFilter('suit','all'); print('kopts len',kitList().length); });
T('stance',()=>{ beginArcana(); newRun(AR); G.tier=1; G.stage=4; G.doors=[{t:'boss',eid:'dragon'}]; chooseDoor(0); runTimers(5); C.stance=true; screen='combat'; render(); ultHelp(); print('combat ok');
T('monimg',()=>{ for (const id of ['slime','dragon','wolf']) { beginArcana(); newRun(AR); G.tier=1; G.stage=2; G.doors=[{t:'fight',eid:id}]; chooseDoor(0); runTimers(5); screen='combat'; render(); print(id, E.img, __app.innerHTML.indexOf('class="eimg"')>0); } });
T('small2',()=>{ SAVE.tickets=25; screen='shrine'; render(); pull(10,true); print('tickets',SAVE.tickets); screen='title'; render(); screen='hero'; render(); screen='quests'; render(); goBack(); print('back1->',screen); goBack(); print('back2->',screen); goBack(); print('back3->',screen);
  screen='tower'; SAVE.tower.sel=1; render(); selectTier(1); print('tier tap ->',screen);
  beginArcana(); newRun(AR); G.stage=2; G.doors=[{t:'fight',eid:'goblin'}]; chooseDoor(0); runTimers(5); confirmExit(); C.busy=false; finishRun(false); print('exit ->',screen); });

SAVE.tut={welcome:true,combat:true,hints:{}};
T('claimall',()=>{ screen='quests'; QT='q'; const q=ensureQuests(); q.daily.forEach(x=>x.have=x.n); q.weekly[0].have=q.weekly[0].n; const g0=SAVE.gems,t0=SAVE.tickets; render(); claimAll(); print('claimed', SAVE.gems-g0, SAVE.tickets-t0, claimableCount()); claimAll(); QT='a'; render(); claimAll(); });
T('scroll',()=>{ screen='hero'; render(); __app.querySelector=function(){ return {scrollTop:240, insertAdjacentHTML(){}} }; lastScreen='hero'; render(); });
 });
print('ERRORS',errs.length); errs.forEach(e=>print(' ',e));
