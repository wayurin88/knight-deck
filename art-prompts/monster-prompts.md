# Knight's Deck — Monster Prompts (20 ศัตรู)

วิธีใช้: ก๊อป BASE PROMPT แล้วแทน `{MONSTER}` ด้วยบล็อกของมอนสเตอร์ตัวนั้น (ด้านล่าง)
ตั้งชื่อไฟล์ `mon-<id>.png` แล้วใส่ใน `knight-deck/art/monsters/` (ผมจะสร้างโฟลเดอร์ให้ถ้ายังไม่มี)
ขนาดแนะนำ 1024×1024 PNG · ใช้ภาพที่ดีใบแรกเป็น style reference กับตัวถัดไป

## ข้อสำคัญ
- **พื้นหลังต้องเป็นสีแมเจนตาล้วน `#FF00FF`** แบน ๆ ไม่มีเงาพื้น ไม่มีลำแสงทอดไปที่พื้น (ผมจะลบสีนี้ให้เป็นพื้นโปร่งใส) ห้ามให้ตัวมอนสเตอร์ใช้สีแมเจนตา/ชมพูสด
- **ไม่ต้องใส่สีธาตุ** ศัตรูในเกมเปลี่ยนธาตุตามชั้น (ไฟ น้ำ ลม ดิน แสง มืด) เกมจะใส่แสงสีธาตุเรืองรอบตัวเอง ภาพจึงใช้สีกลาง ๆ (เทา ม่วงน้ำเงินเข้ม ทองโบราณ ไวน์) และลวดลายกระจกสีเป็นเพียงจุดตกแต่ง
- ตัวต้องอ่านออกชัดเมื่อย่อเหลือประมาณ 200px: **ซิลลูเอตต์ชัด ท่าทางเด่น ไม่เล็กจิ๋ว**
- ห้ามมีตัวหนังสือ

## BASE PROMPT
```
Full-body fantasy monster for a tarot-themed collectible card battle game, Japanese fantasy anime illustration fused with Gothic stained glass: the creature is painted with rich detail, with subtle stained-glass segment patterns, dark lead lines and small antique-gold ornaments on its armor or body, neutral muted palette (slate grey, deep indigo, wine red, antique gold) so that a colored element glow can be added later. Dramatic menacing pose, facing the viewer in a slight three-quarter view, strong readable silhouette, centered, the entire creature visible with space around it, dynamic lighting from above, high detail, premium game art. Isolated on a flat solid magenta #FF00FF background, no ground shadow, no floor, no scenery, no text, no letters, no watermark.

MONSTER: {MONSTER}
```

---

## ศัตรูทั่วไป (12)
| id | ชื่อในเกม | {MONSTER} |
|---|---|---|
| slime | สไลม์เขียว | a large gelatinous slime blob with a translucent glass-like body, a glowing core inside, small bubbles, cheerful but menacing, gilded rim around its base |
| goblin | ก็อบลินโจร | a sneaky goblin thief in a hooded patched cloak holding a curved dagger and a stolen coin purse, pointed ears, wide toothy grin, leather straps with gold buckles |
| skeleton | โครงกระดูกนักรบ | a skeleton warrior in rusted gothic plate armor, round shield and notched longsword, glowing hollow eyes, tattered cape |
| orc | ออร์คคลั่ง | a hulking enraged orc berserker with a heavy spiked club, tusks, scarred green-grey skin, shoulder pauldrons with gold studs, mid-roar |
| wolf | หมาป่าป่า | a huge dire wolf crouched to pounce, bristling mane, bared fangs, a faint silver aura, scars across the muzzle |
| bat | ค้างคาวถ้ำ | a giant cave bat with wide membranous wings stretched like stained glass panels, sharp fangs, glowing eyes, hanging claws |
| golem | โกเลมหิน | a stone golem built from rune-carved boulders and cracked gothic masonry, a faintly glowing seam of gold in its chest, heavy fists |
| snake | งูเลื้อย | a giant coiled serpent with iridescent scales shaped like stained glass tiles, raised hooded head, forked tongue, glowing slit eyes |
| archer | มือธนูกระดูก | a skeleton archer in a ragged hood drawing a bone longbow, quiver of black arrows, glowing eyes, bone armor |
| mushroom | เห็ดหนาม | a monstrous spiked mushroom creature with a wide thorny cap, glowing spores drifting, thick thorn spines along its stem, small angry eyes |
| wraith | ผีสาว | a ghostly wraith maiden floating, long flowing tattered gown dissolving into mist, pale face half hidden by hair, hollow glowing eyes, ethereal and sorrowful |
| mage | ก็อบลินนักเวท | a goblin mage in oversized robes and a crooked hat holding a gnarled staff topped with a swirling orb, arcane runes floating around, cackling |

## ศัตรูพิเศษ (4) — ใหญ่และหรูกว่าตัวทั่วไป
| id | ชื่อในเกม | {MONSTER} |
|---|---|---|
| darkknight | อัศวินทมิฬ | an elite black knight in full dark gothic plate armor with tall spiked helm and flowing torn cape, wielding a greatsword wrapped in shadow, gold trim, imposing |
| stoneknight | อัศวินหิน | an elite knight carved from living stone, heavy cracked plate of granite with spike thorns along the shoulders and shield, glowing gold fissures, massive tower shield |
| witch | แม่มดโลหิต | an elite blood witch in a crimson-black ritual gown with a high collar, holding a chalice of glowing blood, ribbons of blood swirling around her, sharp elegant face, pointed hat with gold chains |
| bear | หมีคลั่ง | an elite giant enraged bear standing on hind legs, torn scarred fur, glowing red eyes, broken chains on its wrists, foam at the mouth, bone-armor patches |

## บอส (4) — ใหญ่ที่สุด เต็มภาพ
| id | ชื่อในเกม | {MONSTER} |
|---|---|---|
| dragon | มังกรเพลิง (ธาตุเปลี่ยนตามชั้น) | a colossal ancient dragon rearing with wings spread wide, wings like gothic stained-glass windows, armored scales with gold edges, horned crown, mouth open ready to breathe, neutral dark scales so an element glow can be added |
| troll | ราชาโทรลล์ | a gigantic troll king in a crown of rusted iron and bone, mossy stone-grey skin, massive club made from a tree trunk, regenerating glowing wounds, heavy fur mantle |
| spider | ราชินีแมงมุม | a monstrous spider queen with eight long legs, a crowned carapace like black stained glass, glowing multiple eyes, silk threads and a web fragment behind her, elegant and terrifying |
| lich | ลิช | an undead lich king floating in tattered royal robes, skull face with a gold crown, hollow glowing eye sockets, bony hands raising a staff topped with a soul orb, spectral shield of floating runes around him |

## ตัวเลือก: มังกร 6 ธาตุ
ถ้าอยากได้มังกรต่างหน้าตาตามธาตุ (ตอนนี้เกมมี 6 ชื่อ: เพลิง สมุทร พายุ ศิลา แสง เงา) ให้สร้างมังกรเพิ่ม โดยเปลี่ยนท้ายพรอมต์ของ dragon เป็น `... with {fire: molten red scales and ember wings | water: sapphire scales and fin-like wings | air: pale silver scales and cloud wings | earth: stone-plated emerald scales and moss | light: white-gold radiant scales | dark: obsidian scales with violet shadow smoke}` ตั้งชื่อ `mon-dragon-fire.png` ฯลฯ ถ้าไม่ทำ เกมใช้ภาพเดียวแล้วเปลี่ยนแสงตามธาตุ

## ลำดับที่แนะนำ (ทำก่อน-หลัง)
1. ชั้น 1: slime, goblin, skeleton, orc, darkknight, dragon (6 ตัวแรกที่ผู้เล่นทุกคนเจอ)
2. ชั้น 2–4: wolf, bat, golem, snake, archer, mushroom, wraith, mage, troll, spider
3. ที่เหลือ: stoneknight, witch, bear, lich และมังกร 6 ธาตุ (ถ้าต้องการ)
