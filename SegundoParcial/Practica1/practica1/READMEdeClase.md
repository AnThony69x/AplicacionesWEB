# Instacion
npm i -g @nestjs/cli   
nest new practica1

## se elimina controller y service y .spec solo se deja  
app.module.ts y main.ts
nest g resource clientes

## instalacion de typeorm y sqlite3
npm install --save @nestjs/typeorm typeorm sqlite3
## se configura la conexion con  sqlite3 en app.module

## se instala el class-validetor
npm i --save class-validator class-transformer 
## se añade el validator en main.ts