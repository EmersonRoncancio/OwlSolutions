/**
 * Generates the brand icons from a single source logo.
 *
 * The repo shipped Angular's default favicon.ico for months, so the tab — and Google's
 * search result — showed the Angular shield instead of Siwina. Keeping the generation in
 * a script means the icons can be rebuilt from the wordmark whenever it changes, instead
 * of being one-off binaries nobody can reproduce.
 *
 * Outputs:
 *   public/favicon.ico          16/32/48, the "S" mark  (48 is Google's minimum)
 *   public/apple-touch-icon.png 180x180, the "S" mark with extra padding for iOS
 *   public/images/logo-siwina.webp the full wordmark, cropped to the graphic as Google
 *                                  asks for Organization.logo. WebP because Google reads
 *                                  it and supports the format, and it is a third of PNG.
 *
 * The favicon stays .ico and the touch icon stays .png on purpose: ICO/PNG are the
 * formats every browser and crawler accepts for icons, while WebP favicon support is
 * uneven — not a place to spend bytes for a 3 KiB file.
 *
 * Requires Pillow: python3 -m pip install --user Pillow
 * The master lives in tools/brand/ rather than public/ so it is versioned but never
 * deployed, and so re-running this never feeds a generated file back in as the source.
 *
 * Usage: npm run icons:brand [-- path/to/other-source.png]
 */
import { spawnSync } from 'node:child_process';
import { argv } from 'node:process';

const SOURCE = argv[2] ?? 'tools/brand/logo-source.png';

const script = `
import sys
from PIL import Image, ImageChops

src = Image.open(sys.argv[1]).convert('RGB')

def trim(im):
    """Crop away the flat white canvas around the artwork."""
    bg = Image.new('RGB', im.size, (255, 255, 255))
    box = ImageChops.difference(im, bg).getbbox()
    return im.crop(box) if box else im

wordmark = trim(src)

def columns_with_ink(im):
    px, (w, h) = im.load(), im.size
    return [any(min(px[x, y]) < 240 for y in range(h)) for x in range(w)]

def first_glyph(im):
    """The leading letter, used as the square mark: a wordmark is illegible at 16px."""
    cols, groups, start = columns_with_ink(im), [], None
    for x, inked in enumerate(cols):
        if inked and start is None:
            start = x
        elif not inked and start is not None:
            groups.append((start, x)); start = None
    if start is not None:
        groups.append((start, len(cols)))
    x0, x1 = groups[0]
    return trim(im.crop((x0, 0, x1, im.size[1])))

def square(mark, side, pad=0.16):
    inner = int(side * (1 - 2 * pad))
    w, h = mark.size
    scale = inner / max(w, h)
    m = mark.resize((max(1, round(w * scale)), max(1, round(h * scale))), Image.LANCZOS)
    canvas = Image.new('RGB', (side, side), (255, 255, 255))
    canvas.paste(m, ((side - m.size[0]) // 2, (side - m.size[1]) // 2))
    return canvas

mark = first_glyph(wordmark)
square(mark, 256).save('public/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
square(mark, 180, pad=0.20).save('public/apple-touch-icon.png', optimize=True)

logo = wordmark.copy()
logo.thumbnail((640, 640), Image.LANCZOS)
logo.save('public/images/logo-siwina.webp', quality=88, method=6)

print(f'  favicon.ico            16/32/48 from a {mark.size[0]}x{mark.size[1]} mark')
print(f'  apple-touch-icon.png   180x180')
print(f'  images/logo-siwina.webp {logo.size[0]}x{logo.size[1]}')
`;

const run = spawnSync('python3', ['-c', script, SOURCE], { stdio: 'inherit' });
if (run.status !== 0) {
  console.error('brand icons: failed. Is Pillow installed? python3 -m pip install --user Pillow');
  process.exit(run.status ?? 1);
}
