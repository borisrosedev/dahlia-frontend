#!/bin/bash
# WEBPACK
npm i -D webpack webpack-cli webpack-dev-server
npm i -D sass sass-loader typescript ts-loader css-loader style-loader
npm in  -D html-webpack-plugin copy-webpack-plugin
# TYPESCRIPT
touch tsconfig.json
# PRETTIER 
npm i -D prettier && touch .prettierrc.json
npm pkg set scripts.format:write="prettier . --write"
npm pkg set scripts.format:check="prettier . --check"
# LINTER
npm i -D eslint @eslint/js typescript typescript-eslint
touch eslint.config.ts
# STRUCTURE
mkdir -p src/ts src/sass assets/images src/ts/containers  
mkdir -p src/ts/ui/components src/ts/ui/pages
mkdir -p src/ts/models src/ts/interfaces src/ts/services 
mkdir -p src/ts/data-sources src/ts/custom-types
mkdir -p src/sass/pages src/sass/components src/sass/vendors 
mkdir -p src/sass/layout src/sass/base src/sass/abstract
# Dockerfile
touch .dockerignore Dockerfile docker-composer.yaml

# 
touch main.ts webpack.config.js router.ts


