#!/usr/bin/env bash
# Regenerates the derived (downscaled) webp candidates served by the site.
#
# Widths are driven by the `sizes` attributes in the templates, so a 1x desktop
# render never downloads more pixels than it paints:
#   hero     -> 560 / 720, alongside the 1120 original  (hero.html)
#   products -> 340, alongside the 680 original         (productSection.html)
#
# The full-size *.webp files are intentionally NOT rebuilt here: the versions in the
# repo are better optimized than a plain `cwebp -q 82` pass and re-encoding inflates
# them. Re-encode an original only when its PNG source actually changes.
set -euo pipefail

cd "$(dirname "$0")/.."
QUALITY=82

encode() { # <src.png> <out.webp> <width>
  cwebp -quiet -q "$QUALITY" -resize "$3" 0 "$1" -o "$2"
  printf '  %-34s %s bytes\n' "$(basename "$2")" "$(wc -c <"$2" | tr -d ' ')"
}

encode public/images/hero-composed.png public/images/hero-composed-720.webp 720
encode public/images/hero-composed.png public/images/hero-composed-560.webp 560

for name in pos-barista support-headphones team-group; do
  encode "public/images/$name.png" "public/images/$name-340.webp" 340
done
