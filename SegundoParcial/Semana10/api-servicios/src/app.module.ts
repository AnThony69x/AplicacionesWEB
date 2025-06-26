import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PresentacionesModule } from './presentaciones/presentaciones.module';
import { SlidesModule } from './slides/slides.module';

@Module({
  imports: [
    UsuariosModule,
    PresentacionesModule,
    SlidesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    UsuariosModule,
    PresentacionesModule,
    SlidesModule,    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
