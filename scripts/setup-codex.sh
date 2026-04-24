#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[setup] Installing npm dependencies..."
npm ci

echo "[setup] Verifying Node.js and npm versions..."
node -v
npm -v

echo "[setup] Setup complete. Try: npm run dev"
