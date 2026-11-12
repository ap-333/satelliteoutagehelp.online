#!/usr/bin/env bash
# Builds the standalone landing page for https://dish.satelliteoutagehelp.online into ./dish-dist
# (a folder you can push to its own GitHub Pages repo, source: branch main / root).
set -euo pipefail
cd "$(dirname "$0")/.."
SUB="dish.satelliteoutagehelp.online"

rm -rf .next out dish-dist
NEXT_PUBLIC_LANDING_ONLY=1 NEXT_PUBLIC_SITE_URL="https://$SUB" npx next build

mkdir dish-dist
rsync -a out/ dish-dist/ \
  --exclude '/about' --exclude '/contact' --exclude '/disclaimer' --exclude '/dish' \
  --exclude '/outage-information' --exclude '/privacy-policy' --exclude '/provider-resources' \
  --exclude '/satellite-equipment' --exclude '/satellite-signal-information' --exclude '/terms' \
  --exclude '/sitemap.xml' --exclude '/__next.about*' --exclude '/__next.contact*'
printf '%s\n' "$SUB" > dish-dist/CNAME
touch dish-dist/.nojekyll
rm -rf .next out
echo "Built dish-dist/ for $SUB"
