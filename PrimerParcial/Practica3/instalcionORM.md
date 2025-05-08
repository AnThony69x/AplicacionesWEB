1. **Inicializar proyecto y `package.json`**

```bash
npm init -y
```

2. **Instalar herramientas de desarrollo para TypeScript**

```bash
npm i -D typescript @types/node ts-node-dev rimraf
```

3. **Inicializar configuración de TypeScript**

```bash
npx tsc --init --outDir dist/ --rootDir src
```

4. **Agregar scripts al `package.json`**
Muy bien, pero asegúrate que el bloque quede así:

```json
"scripts": {
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
}
```

> `tsnd` es un alias corto de `ts-node-dev`, así que eso está bien.

5. **Instalar dependencias de producción para TypeORM + SQLite**

```bash
npm install typeorm reflect-metadata sqlite3 --save
```

---

6. **Sugerencia importante: revisa `tsconfig.json`**

Asegúrate de que **estas opciones estén activadas** (muy importante para que funcionen los decoradores de TypeORM):

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true,
"target": "ES2021",
"module": "CommonJS",
"moduleResolution": "node"
```

7. Si quieres, te puedo ayudar a revisar tu `tsconfig.json` completo.

---

 **Ejecución del proyecto**

Después de configurar todo y tener tu código fuente listo en `/src`, ejecutas:

```bash
npm run dev
```
