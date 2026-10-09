# Knight's Deck — UI Art Prompts (Gilded Gothic Tarot + readable dark panels)

ธีม: "ราตรีทองคำ" — โทนเดียวกับภาพไพ่ (อนิเมะแฟนตาซี × กระจกสีโกธิค กรอบโลหะทอง) แต่พื้นหลังต้องเรียบพอให้ตัวหนังสือ/ปุ่มอ่านชัด
ไฟล์ทั้งหมดที่ได้ ให้ใส่โฟลเดอร์ `art/ui/` ตามชื่อไฟล์ในแต่ละหัวข้อ แล้วบอกผม ผมจะเชื่อมเข้าเกม

## กติกาใช้ร่วมกัน (อ่านก่อน)
- ห้ามมีตัวหนังสือในภาพ (AI เขียนผิด) — ผมใส่ตัวหนังสือในเกมเอง ท้ายพรอมต์ทุกอันมี `no text, no letters, no watermark`
- ใช้โมเดล/เครื่องมือเดียวกับที่ทำไพ่ และใช้ภาพที่ดีใบแรกเป็น style reference (--sref) เพื่อให้สไตล์เหมือนกัน
- ภาพพื้นหลังเป็นแนวตั้ง 9:16 (แนะนำ 1080×1920 ขึ้นไป) บันทึกเป็น JPG คุณภาพ ~80 ขนาดไฟล์ไม่เกิน ~250KB ต่อภาพ (เกมเป็น PWA ต้องโหลดเร็ว)
- สำคัญ: ให้ **ด้านล่าง 35–40% ของภาพมืดและเรียบ** (ที่ตั้งปุ่ม/ไพ่) และ **ตรงกลางไม่มีรายละเอียดสว่างจัด**

## STYLE ANCHOR (ต่อท้ายทุกพรอมต์พื้นหลัง)
```
Style: Japanese fantasy anime illustration fused with Gothic cathedral stained glass, colored glass segments separated by dark lead lines, aged gilded metal ornaments, deep midnight indigo and violet palette with antique gold highlights, soft magical glow, premium collectible card game UI background, painterly, atmospheric, high detail but calm composition with a dark low-contrast lower area for interface elements. no text, no letters, no watermark, no characters in the center.
```

---

## A. พื้นหลัง (9 ภาพ)

### A1 `bg-hub.jpg` — หน้าหลัก (หอคอย)
```
Vertical 9:16 mobile game background. A colossal gothic tower rising into a starry violet night sky, seen from below, glowing stained-glass windows in amber and teal, floating tarot-card silhouettes drifting around the spire, a faint golden aura at the top, misty cobblestone courtyard fading to deep indigo darkness at the bottom third. Composition: tower centered in the upper 60%, bottom 40% dark and empty.
```
### A2 `bg-shrine.jpg` — วิหารดวงดาว (สุ่มการ์ด)
```
Vertical 9:16 mobile game background. Inside a vast gothic star shrine, a circular rose window of stained glass glowing with gold and sapphire light high in the center, beams of light falling onto an empty stone altar, constellations drawn in gold lines across a dark vaulted ceiling, drifting stardust particles. Bottom third dark and calm.
```
### A3 `bg-page.jpg` — พื้นหลังหน้าทั่วไป (ตัวละคร / สมุดไพ่ / ภารกิจ / ร้าน) — ต้องเรียบมาก
```
Vertical 9:16 seamless subtle background texture: very dark midnight indigo with faint stained-glass lead-line pattern barely visible, extremely low contrast, tiny gold dust specks, soft vignette. Almost flat, designed so that text and buttons stay readable on top. no text.
```

### A4–A9 ฉากต่อสู้ตามธาตุ (ใช้เป็นฉากด้านหลังศัตรู) — อัตราส่วน 9:16 เหมือนกัน; โซนศัตรูอยู่ครึ่งบน, พื้นด้านล่างมืด
เพิ่มบรรทัดธาตุต่อไปนี้นำหน้า "Vertical 9:16 combat arena background, empty arena, no creatures,":

- `bg-fire.jpg`  — `ruined cathedral hall engulfed in embers, molten cracks glowing ruby and amber in the floor, drifting sparks`
- `bg-water.jpg` — `flooded crystal grotto with cobalt and teal glass pillars, shallow glowing water, floating droplets and soft mist`
- `bg-air.jpg`   — `open sky terrace of white marble above the clouds, pale sky-blue and silver light, streaming wind ribbons and feathers`
- `bg-earth.jpg` — `mossy underground temple with emerald and amber crystals in the walls, hanging roots, warm brown-gold light`
- `bg-light.jpg` — `radiant sanctum of white and gold stained glass, holy beams from above, drifting golden motes`
- `bg-dark.jpg`  — `void chapel of black obsidian and violet glass, cold purple witchfire, thin broken chains floating, deep shadows`

(ไม่ต้องทำครบทันที — เริ่มจากไฟ น้ำ ลม ดิน ส่วนแสง/มืดตามหลัง)

---

## B. โลโก้
### B1 `logo-emblem.png` — ตราประจำเกม (ไม่มีตัวหนังสือ ผมใส่ชื่อเกมเอง)
```
Square emblem for a tarot knight card game: a gilded shield outline with a knight's helmet silhouette, a radiant eight-pointed star above it, ornate gothic gold filigree, stained-glass inlays in indigo and amber. Isolated on a plain solid black background, centered, symmetrical, high detail. no text, no letters.
```
(ผมจะลบพื้นดำให้เองเป็นพื้นโปร่งใส)

---

## C. ไอคอน — เลือก 1 ใน 2 ทาง

### ทาง 1 (แนะนำ ฟรี สม่ำเสมอแน่นอน): ใช้ชุดไอคอนเส้นสำเร็จรูป (Phosphor / Lucide) ผมย้อมสีทองให้เอง
คุณไม่ต้องสร้างอะไรเลย ผมเลือกไอคอนจากชุดฟรี ฝังในเกม ข้อดี: ครบ สม่ำเสมอ ไฟล์เล็ก คมทุกขนาด ข้อเสีย: ไม่มีลายกระจกสี (ใช้ลายเส้นทองแทน)

### ทาง 2: สร้างด้วย AI เป็น "แผ่นไอคอน" 12 ตัวต่อภาพ (ทำ 4 แผ่น) แล้วผมตัดแยก
พรอมต์พื้นฐาน (เปลี่ยนรายชื่อไอคอนในแต่ละแผ่น):
```
A sprite sheet of 12 game icons arranged in a clean 4 columns x 3 rows grid, each icon centered in its own equal cell with generous spacing, same style across all: gilded antique-gold metal icon with a small stained-glass inlay, soft inner glow, thick clean silhouette readable at small size, isolated on a plain solid black background. Icons in reading order: [LIST]. no text, no letters, no labels, no numbers.
```
**แผ่น 1 — เมนูและทรัพยากร:** tower, hero helmet, stack of tarot cards, scroll quest, star shrine, gem, ticket, star dust sparkle, coin, heart, lightning bolt energy, gift box
**แผ่น 2 — ธาตุและหน้าที่:** flame (fire), water drop (water), wind swirl (air), mountain crystal (earth), sun burst (light), crescent moon (dark), sword (attack), shield (defense), sparkle plus (buff), spiral (special), reversed card, star rank
**แผ่น 3 — สถานะ:** broken shield (break), dizzy swirl (stun), shield block, flexed arm (strength), cracked target (vulnerable), wilted leaf (weak), thorn vine (thorns), green plus heal (regen), fang (drain), ghost wisp (ward), spider web (web), clock hourglass
**แผ่น 4 — ปุ่มการกระทำ:** ultimate star burst, fist (basic attack), guard bracer, end turn arrow, exit door, help question mark, settings gear, back arrow, home house, lock, chest, sound speaker

เคล็ดลับ: ถ้าได้ภาพแล้วบางตัวเพี้ยน ให้สร้างทั้งแผ่นใหม่ (อย่าสร้างทีละตัว เพราะสไตล์จะไม่ตรงกัน)

---

## D. ส่งงานคืนให้ผม
ตั้งชื่อไฟล์ตามหัวข้อ ใส่ใน `knight-deck/art/ui/` เช่น `bg-hub.jpg`, `bg-shrine.jpg`, `bg-page.jpg`, `bg-fire.jpg` ... `logo-emblem.png`, `icons-1.png` ... `icons-4.png` แล้วบอกผม
ถ้ามีภาพใดที่ไม่ตรงโทน บอกผมได้ ผมปรับพาเลตของเกมให้เข้ากับภาพจริง
