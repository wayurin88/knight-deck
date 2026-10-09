"""สร้างไฟล์จำลองบอท: stubs + สคริปต์เกมจาก index.html + bot.js + โค้ดที่ส่งเข้ามา แล้วรันด้วย jsc (macOS)
ตัวอย่างการใช้ดู example_winrate.py"""
import re, subprocess, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
JSC = '/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc'
def build(extra_js, overrides=()):
    base = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
    for a, b in overrides:                      # แก้ค่าคงที่ในเกมชั่วคราวเพื่อทดลอง (ไม่แก้ไฟล์จริง)
        assert a in base, a
        base = base.replace(a, b)
    stub = open(os.path.join(ROOT, 'tools', 'jsc-stubs.js'), encoding='utf-8').read()
    game = re.search(r'<script>\n(.*)</script>', base, re.S).group(1)
    bot = open(os.path.join(ROOT, 'tools', 'sim', 'bot.js'), encoding='utf-8').read()
    return stub + game + bot + extra_js
def run(extra_js, overrides=(), out='/tmp/knight-sim.js'):
    open(out, 'w', encoding='utf-8').write(build(extra_js, overrides))
    r = subprocess.run([JSC, out], capture_output=True, text=True)
    return (r.stdout + r.stderr).strip()
