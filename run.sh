#!/bin/sh

set -eu

rm -rf dist/
npx parcel ./prisma/client/index.js