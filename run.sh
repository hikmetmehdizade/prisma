#!/bin/sh

set -eu

npm install
npx prisma generate
rm -rf dist/
npx rollup ./index.js --file ./dist/index.js --format cjs