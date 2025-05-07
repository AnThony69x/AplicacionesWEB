# Inicializar un proyecto

npm init --y

npm i -D typescript @types/node ts-node-dev rimraf

npx tsc --init --outDir dist/ --rootDir src

 "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"

/src/app.ts

npm run dev