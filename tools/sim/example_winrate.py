"""ตัวอย่าง: อัตราชนะของบอท (ไม่ปัดจังหวะ) ต่อ Major/ชั้น — ใช้ปรับสมดุล
รัน: python3 tools/sim/example_winrate.py   (ช้า ใช้เวลาหลายนาทีถ้า N สูง)"""
import os, sys
sys.path.insert(0, os.path.dirname(__file__))
from gen import run
js = '''
try{
 var N=20;
 ['M3','M2','M8'].forEach(mj=>{
  [1,4,7].forEach(t=>{
   const rec=recLevel(t); const r=winrate(t,{prof:'starter',level:rec,major:mj},N);
   print(mj.padEnd(4),'T'+t,'Lv'+rec,r.w+'%/'+r.hp,r.lost);
  });
 });
}catch(e){print('ERR',e.message,e.stack)}
'''
print(run(js))
