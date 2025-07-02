# Instalacion
npm i -g @nestjs/cli   
nest new practica1

## Se elimina controller y service y .spec solo se deja  
app.module.ts y main.ts
nest g resource clientes

## Instalacion de typeorm y sqlite3
npm install --save @nestjs/typeorm typeorm sqlite3
## Se configura la conexion con  sqlite3 en app.module

## Se instala el class-validetor
npm i --save class-validator class-transformer 
## Se añade el validator en main.ts