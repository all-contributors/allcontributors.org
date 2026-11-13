#!/usr/bin/env sh
if [ "$CONTEXT" = "production" ]; then
  echo "Fetching translations"
  pnpm run get-translations -b main
fi
pnpm run build
