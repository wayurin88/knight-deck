
// ===================== BOT (มองล่วงหน้า 1 เทิร์นด้วยการจำลองจริง) =====================
render = function(){};
var SANDBOX = false;
const _checkWin = checkWin; checkWin = function(){ if(!SANDBOX) _checkWin(); };
function allocStats(level){ let pts=2*(level-1); const st={vit:0,str:0,def:0,int:0,luck:0}; const ord=['vit','str','def'];
  let i=0,g=0; while(pts>0&&g++<900){ const k=(i<45)?ord[i%3]:['int','luck'][(i-45)%2]; i++; if(st[k]<STAT_CAP){st[k]++;pts--;} } return st; }
function setProfile(prof, level, majorId, kitIds, revAll){
  SAVE = starterSave();
  if(prof!=='starter'){ MINORS.forEach(n=>{ if(prof==='all' || (prof==='mid' && n.rank<=8)) SAVE.owned[n.id]=Math.max(SAVE.owned[n.id]||0, revAll?4:1); }); }
  MAJORS.forEach(M=>{ if(M.id===majorId) SAVE.owned[M.id]=Math.max(SAVE.owned[M.id]||0, revAll?4:1); });
  SAVE.equipMajor={id:majorId||SAVE.equipMajor.id, rev:false};
  SAVE.hero={level, exp:0, points:0, stats:allocStats(level)};
  SAVE.amu.equip=[null,null]; SAVE.parry=false;
  if(kitIds) SAVE.equipMinor = kitIds.map(x=> typeof x==='string' ? {id:x,rev:false} : x); else SAVE.equipMinor=null;
  ensureKit();
}
function incoming(){ const it=E.pattern[E.turn%E.pattern.length]; return it.atk? enemyDmg(it.atk)*(it.hits||1):0; }
function evalState(s0){
  // s0: {ehp, inc, unb(unblocked)} ก่อนเริ่ม
  const incNow = incoming(), unb = Math.max(0, incNow - C.block);
  const dmg = s0.ehp - E.hp;
  const prevented = s0.unb - unb;
  const healed = G.hp - s0.hp;
  const bank = Math.min(C.energy, MAXE - REGEN), over = Math.max(0, C.energy - bank);
  let v = dmg*1.0 + prevented*1.0 + healed*1.0 + (E.hp<=0?1000:0);
  v += bank*1.3 + over*0.3;
  v += C.ult*0.4;
  v += Math.max(0,E.vuln-1)*3;
  v -= (G.hp<=0?1000:0);
  return v;
}
function snap(){ return {C:JSON.stringify(C), E:JSON.stringify(E), hp:G.hp, dust:G.dustGot, sd:SAVE.dust, rv:G.revived}; }
function restore(s){ C=JSON.parse(s.C); E=JSON.parse(s.E); G.hp=s.hp; G.dustGot=s.dust; SAVE.dust=s.sd; G.revived=s.rv; }
function actions(){
  const a=[];
  C.kit.forEach((c,i)=>{ if(!c.used && kitCost(c)<=C.energy) a.push(['k',i]); });
  if(C.ult>=C.ultMax) a.push(['u']);
  if(!C.basicUsed) a.push(['b']);
  return a;
}
function doAct(a){ if(a[0]==='k') playKit(a[1]); else if(a[0]==='b') basicAtk(); else useUlt(); }
function planTurn(){
  const base=snap();
  const s0={ehp:E.hp, hp:G.hp, unb:Math.max(0,incoming()-C.block)};
  let best={v:evalState(s0), seq:[]};
  SANDBOX=true;
  (function dfs(seq){
    const acts=actions();
    for(const a of acts){
      const st=snap();
      doAct(a);
      const s=seq.concat([a]);
      const v=evalState(s0);
      if(v>best.v+1e-9){ best={v,seq:s}; }
      if(E.hp>0) dfs(s);
      restore(st);
    }
  })([]);
  SANDBOX=false;
  restore(base);
  return best.seq;
}
function botTurn(){
  const seq=planTurn();
  if(!seq.length) return false;
  // execute first action only (re-plan each step to keep state exact)
  doAct(seq[0]); return true;
}
function runOne(tier, opt){
  setProfile(opt.prof, opt.level, opt.major, opt.kit, opt.rev);
  beginArcana();
  if(opt.revKit) AR.minors.forEach(m=>{ if(canRev(m.id)) m.rev=true; });
  SAVE.tower.cleared=tier-1; SAVE.tower.sel=tier;
  newRun(AR);
  let guard=0;
  while(guard++<6000){
    if(screen==='doors'){
      const d=G.doors; let ix=0;
      const rest=d.findIndex(x=>x.t==='rest'), shop=d.findIndex(x=>x.t==='shop'), fight=d.findIndex(x=>x.t==='fight');
      if(d.length===1) ix=0;
      else if(rest>=0 && (G.hp<G.maxHp*.65 || G.stage===STAGES-1)) ix=rest;
      else if(shop>=0 && G.gold>=70) ix=shop;
      else if(fight>=0) ix=fight; else ix=0;
      chooseDoor(ix); continue;
    }
    if(screen==='combat'){
      if(C.busy){ runTimers(1); continue; }
      if(!botTurn()) endTurn();
      continue;
    }
    if(screen==='event'){ if(G.ev.result){ nextFloor(); continue; } const id=G.ev.def.id; const k=['well','traveler','shrine','challenge'].includes(id)?0:G.ev.ch.length-1; evChoose(k); if(!G.ev.result && screen==='event'){ G.evSwap=false; closeModal(); G.ev.result='ผ่านไป'; } continue; }
    if(screen==='reward'){ nextFloor(); continue; }
    if(screen==='shop'){
      G.shop.items.forEach((it,i)=>{ if(!it.sold && G.gold>=it.price) buyRelic(i); });
      if(!G.shop.potion && G.hp<G.maxHp*.75 && G.gold>=G.shop.potionPrice) buyPotion();
      nextFloor(); continue; }
    if(screen==='rest'){ restHeal(); continue; }
    if(screen==='over'){ return {win:0, stage:G.stage, hp:0}; }
    if(screen==='victory'){ return {win:1, hp:G.hp/G.maxHp}; }
    if(!runTimers(1)) break;
  }
  return {win:0, stage:-1};
}
function winrate(tier, opt, N){
  let w=0, hp=0, stg={};
  for(let i=0;i<N;i++){ const r=runOne(tier,opt); w+=r.win; if(r.win) hp+=r.hp; else stg[r.stage]=(stg[r.stage]||0)+1; __timers=[]; }
  return {w:(100*w/N).toFixed(0), hp:w?(100*hp/w).toFixed(0):'-', lost:JSON.stringify(stg)};
}
// duel: สู้ศัตรูตัวเดียว เริ่ม HP เต็ม · score = ชนะ: HP ที่เหลือ(0-1) · แพ้: -(HP ศัตรูที่เหลือ)
function duel(tier, level, majorId, kitIds, N, eid, rev){
  let w=0, sc=0, tsum=0;
  for(let i=0;i<N;i++){
    setProfile('all', level, majorId||'M3', null, rev);
    SAVE.equipMinor = kitIds.map(x=> typeof x==='string' ? {id:x,rev:!!rev} : x);
    SAVE.tower.cleared=tier-1; SAVE.tower.sel=tier;
    beginArcana(); newRun(AR);
    G.node={t:(eid||'dragon')==='dragon'?'boss':'fight', eid:eid||'dragon'};
    startCombat(eid||'dragon');
    let g=0, turns=0, last=null;
    while(g++<2000 && screen==='combat'){
      if(C.busy){ runTimers(1); continue; }
      last={ehp:E.hp/E.maxHp}; turns=C.turn;
      if(!botTurn()) endTurn();
    }
    if(screen==='combat'){ sc+=-last.ehp; }
    else if(screen==='over'){ sc+=-(last?last.ehp:1); }
    else { w++; sc+=G.hp/G.maxHp; tsum+=turns; }
    __timers=[]; C=E=null;
  }
  return {w:Math.round(100*w/N), score:(sc/N).toFixed(2), turns:w?(tsum/w).toFixed(1):0};
}

// ---- ผู้เล่นฉลาด: เลือกชุดไพ่ที่ดีที่สุดจากที่มี (hill climbing บน duel score) ----
function duelScoreKit(kit, tier, lv, major){
  let t=0; ['orc','darkknight','dragon'].forEach(e=>{ t+=parseFloat(duelM(tier,lv,major,kit,e).score); }); return t/3;
}
function duelM(tier, level, majorId, kitIds, eid){
  setProfile('all', level, majorId, null, false);
  SAVE.equipMinor = kitIds.map(x=>({id:x,rev:false}));
  SAVE.tower.cleared=tier-1; SAVE.tower.sel=tier;
  beginArcana(); newRun(AR);
  G.node={t:eid==='dragon'?'boss':'fight', eid};
  startCombat(eid);
  let g=0, last=1;
  while(g++<2000 && screen==='combat'){
    if(C.busy){ runTimers(1); continue; }
    last=E.hp/E.maxHp;
    if(!botTurn()) endTurn();
  }
  let sc;
  if(screen==='combat'||screen==='over') sc=-last; else sc=G.hp/G.maxHp;
  __timers=[]; C=E=null;
  return {score:sc.toFixed(3)};
}
function optKit(ownFn, tier, lv, major){
  const roles=['atk','def','buf','spc'];
  const cands=r=>MINORS.filter(n=>n.role===r && ownFn(n));
  let kit=roles.map(r=>cands(r).sort((a,b)=>a.rank-b.rank)[0].id);
  let best=duelScoreKit(kit,tier,lv,major);
  for(let pass=0;pass<2;pass++){
    roles.forEach((r,i)=>{
      cands(r).forEach(c=>{ if(c.id===kit[i]) return; const k2=kit.slice(); k2[i]=c.id; const s=duelScoreKit(k2,tier,lv,major); if(s>best+1e-9){best=s;kit=k2;} });
    });
  }
  return {kit,score:best};
}
