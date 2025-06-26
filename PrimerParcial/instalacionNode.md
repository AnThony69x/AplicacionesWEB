# Inicializar un proyecto

npm init --y

npm i -D typescript @types/node ts-node-dev rimraf

npx tsc --init --outDir dist/ --rootDir src

# Agrega los scripts en package.json
 "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"

# Crear la carpeta src y crear el archivo app.ts
/src/app.ts

npm run dev