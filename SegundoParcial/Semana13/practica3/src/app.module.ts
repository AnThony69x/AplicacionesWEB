import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SlidesModule } from './slides/slides.module';
import { PresentacionesModule } from './presentaciones/presentaciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'app.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    UsuariosModule, SlidesModule, PresentacionesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
