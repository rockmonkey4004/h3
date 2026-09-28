#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"
NODE20_HOME="${NODE20_HOME:-/opt/homebrew/opt/node@20}"
[[ -x "$NODE20_HOME/bin/node" ]] && export PATH="$NODE20_HOME/bin:$PATH"

major="$(node -p 'process.versions.node.split(".")[0]')"
(( major >= 20 )) || { echo "Node 20+ is required" >&2; exit 2; }

if [[ -d .github/workflows ]] && find .github/workflows -type f -print -quit | grep -q .; then
  echo "GitHub Actions workflows are retired" >&2
  exit 1
fi

rm -rf .next
npm ci
npm run lint
npm run typecheck
npm run build
echo "local_verification=passed"
