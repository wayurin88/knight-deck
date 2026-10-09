#!/usr/bin/env python3
"""ทดสอบควัน: ต้องรันบน macOS (ใช้ JavaScriptCore ที่มากับระบบ) · ผ่านเมื่อพิมพ์ 'ERRORS 0'
รัน: python3 tools/smoke.py"""
import os, re, subprocess, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
JSC = '/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc'
html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()
game = re.search(r'<script>\n(.*)</script>', html, re.S).group(1)
stubs = open(os.path.join(ROOT, 'tools', 'jsc-stubs.js'), encoding='utf-8').read()
tests = open(os.path.join(ROOT, 'tools', 'smoke-tests.js'), encoding='utf-8').read()
out = '/tmp/knight-smoke.js'
open(out, 'w', encoding='utf-8').write(stubs + game + '\n' + tests)
r = subprocess.run([JSC, out], capture_output=True, text=True)
text = (r.stdout + r.stderr).strip()
print(text[-1800:])
sys.exit(0 if re.search(r'^ERRORS 0$', text, re.M) else 1)
