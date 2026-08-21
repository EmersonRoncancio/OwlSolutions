#!/usr/bin/env bash
# Regenerates every derived image candidate the site serves.
#
# Widths follow the `sizes` attributes in the templates so no viewport downloads more
# pixels than it paints. The mobile numbers target Lighthouse's Moto G Power profile
# (412px CSS at 1.75x DPR):
#
#   hero      renders 364px CSS on mobile -> needs 637px  -> 640w candidate
#             renders 560px CSS on desktop                -> 560w candidate
#   products  render  300px CSS on mobile -> needs 525px  -> 560w candidate
#             render  340px CSS on desktop                -> 340w candidate
#
# The hero also ships AVIF, since it is the LCP resource and AVIF lands ~30% under
# WebP at visually equivalent quality. Products stay WebP: they are lazy and below
# the fold, so their bytes never touch the LCP.
#
# The full-size *.webp files are NOT rebuilt here — the versions in the repo are
# better optimized than a plain `cwebp -q 82` pass and re-encoding inflates them.
set -euo pipefail

cd "$(dirname "$0")/.."
WEBP_QUALITY=82
AVIF_QUALITY=68   # verified against the hero's small bubble text; no visible artifacts
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

webp() { # <src.png> <out.webp> <width>
  cwebp -quiet -q "$WEBP_QUALITY" -resize "$3" 0 "$1" -o "$2"
  printf '  %-32s %s bytes\n' "$(basename "$2")" "$(wc -c <"$2" | tr -d ' ')"
}

avif() { # <src.png> <out.avif> <width>
  sips -Z "$3" "$1" --out "$TMP/resized.png" >/dev/null
  avifenc -q "$AVIF_QUALITY" -s 4 "$TMP/resized.png" "$2" >/dev/null
  printf '  %-32s %s bytes\n' "$(basename "$2")" "$(wc -c <"$2" | tr -d ' ')"
}

# 720w is deliberately absent: that file predates this script and is better optimized
# than a `cwebp -q 82` pass (70.0 KiB committed vs 79.8 KiB re-encoded).
echo 'Hero — WebP candidates:'
for w in 560; do webp public/images/hero-composed.png "public/images/hero-composed-$w.webp" "$w"; done

echo 'Hero — AVIF candidates (LCP resource):'
for w in 560 720 1120; do avif public/images/hero-composed.png "public/images/hero-composed-$w.avif" "$w"; done

echo 'Products — WebP candidates:'
for name in pos-barista support-headphones team-group; do
  webp "public/images/$name.png" "public/images/$name-340.webp" 340
  webp "public/images/$name.png" "public/images/$name-560.webp" 560
done
