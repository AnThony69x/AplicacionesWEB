import { DataSource } from 'typeorm';
import { UsuarioDataSource } from './usuario.datasource';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'practica3',
  synchronize: true, // Solo para desarrollo
  logging: false,
  entities: [UsuarioDataSource],
});