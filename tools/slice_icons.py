#!/usr/bin/env python3
"""ตัดแผ่นไอคอน (art/ui/icons-1..4.jpg พื้นดำ 4 คอลัมน์ x 3 แถว) เป็นไฟล์ WebP โปร่งใสใน art/ui/icons/<ชื่อ>.webp
ต้องมี: pip3 install pillow numpy scipy   รัน: python3 tools/slice_icons.py"""
import os, sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
D = os.path.join(ROOT, 'art', 'ui')
SHEETS = {
 1: 'tower hero cards quest shrine gem ticket dust coin heart energy gift'.split(),
 2: 'fire water air earth light dark atk def buf spc rev rank'.split(),
 3: 'brk stun block str vuln weak thorns regen drain ward web time'.split(),
 4: 'ult basic guard endturn exit help settings back home lock chest sound'.split(),
}
def cut(im, size):
    a = np.asarray(im.convert('RGB')).astype(np.float32); mx = a.max(axis=2)
    dark = mx < 28
    lab, n = ndi.label(dark)
    border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    bg = np.isin(lab, list(border))
    alpha = (~bg).astype(np.float32)
    alpha = ndi.binary_erosion(alpha > .5, iterations=1).astype(np.float32)
    rgba = np.dstack([a, alpha * 255]).astype(np.uint8)
    img = Image.fromarray(rgba, 'RGBA')
    img = Image.fromarray(np.dstack([np.asarray(img)[..., :3], np.asarray(img.getchannel('A').filter(ImageFilter.GaussianBlur(.8)))]), 'RGBA')
    bb = img.getchannel('A').point(lambda v: 255 if v > 40 else 0).getbbox()
    img = img.crop(bb); s = max(img.size); sq = Image.new('RGBA', (s, s), (0, 0, 0, 0)); sq.paste(img, ((s - img.width) // 2, (s - img.height) // 2))
    return sq.resize((size, size), Image.LANCZOS)
for k, names in SHEETS.items():
    src = os.path.join(D, f'icons-{k}.jpg')
    if not os.path.exists(src): print('ไม่พบ', src); continue
    im = Image.open(src).convert('RGB'); a = np.asarray(im).max(axis=2)
    m = ndi.binary_dilation(a > 40, iterations=18)
    lab, n = ndi.label(m)
    objs = ndi.find_objects(lab)
    boxes = [(o[0].start, o[1].start, o[0].stop, o[1].stop) for o in objs if (o[0].stop - o[0].start) > 80 and (o[1].stop - o[1].start) > 80]
    if len(boxes) != 12: print('แผ่น', k, 'พบ', len(boxes), 'ชิ้น (ควรเป็น 12)')
    boxes.sort(key=lambda b: ((b[0] + b[2]) / 2 // (im.height / 3), (b[1] + b[3]) / 2))   # แถว → คอลัมน์
    for name, (y0, x0, y1, x1) in zip(names, boxes):
        pad = 6
        cut(im.crop((max(0, x0 - pad), max(0, y0 - pad), min(im.width, x1 + pad), min(im.height, y1 + pad))), 160).save(os.path.join(D, 'icons', f'{name}.webp'), 'WEBP', quality=90, method=6)
    print('แผ่น', k, 'ตัดแล้ว', len(boxes))
