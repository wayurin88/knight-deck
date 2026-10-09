#!/usr/bin/env python3
"""ลบพื้นแมเจนตา (#FF00FF) จากภาพมอนสเตอร์ที่สร้างด้วย AI → WebP โปร่งใส ความสูง ≤720px
ต้องมี: pip3 install pillow numpy
รัน:  python3 tools/cutout_monsters.py <โฟลเดอร์ที่มี mon-*.jpg|png> [ชื่อ...]
ผลลัพธ์: mon-<ชื่อ>.webp ในโฟลเดอร์เดียวกัน (ต้นฉบับ JPG/PNG ขนาด ~3MB ไม่ควร commit ให้ย้ายออกจาก repo)
หลังได้ไฟล์ใหม่ ให้เพิ่มชื่อใน ENEMY_IMG ใน index.html"""
import sys, os, glob
from PIL import Image
import numpy as np
d = sys.argv[1]
names = sys.argv[2:] or [os.path.basename(f)[4:].rsplit('.', 1)[0] for f in glob.glob(os.path.join(d, 'mon-*.jpg')) + glob.glob(os.path.join(d, 'mon-*.png'))]
for n in names:
    src = next((p for p in (os.path.join(d, f'mon-{n}.jpg'), os.path.join(d, f'mon-{n}.png')) if os.path.exists(p)), None)
    if not src: print('ไม่พบ', n); continue
    a = np.asarray(Image.open(src).convert('RGB')).astype(np.float32)
    R, G, B = a[..., 0], a[..., 1], a[..., 2]
    mn = np.minimum(R, B); m = mn - G
    bg = np.where(mn > 150, np.clip((m - 70) / 45.0, 0, 1), 0)      # 1 = พื้นแมเจนตา
    spill = np.clip(m - 20, 0, None) * 0.55                          # ลดสีแมเจนตาที่ขอบ
    rgba = np.dstack([np.clip(R - spill * .5, 0, 255), G, np.clip(B - spill * .5, 0, 255), (1 - bg) * 255]).astype(np.uint8)
    im = Image.fromarray(rgba)
    im = im.crop(im.getchannel('A').point(lambda v: 255 if v > 20 else 0).getbbox())
    im.thumbnail((720, 720), Image.LANCZOS)
    out = os.path.join(d, f'mon-{n}.webp'); im.save(out, 'WEBP', quality=82, method=6)
    print(n, im.size, os.path.getsize(out) // 1024, 'KB')
