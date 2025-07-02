import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentacionesService } from './presentaciones.service';
import { PresentacionesResolver } from './presentaciones.resolver';
import { Presentacion } from './entities/presentacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presentacion])],
  providers: [PresentacionesResolver, PresentacionesService],
})
export class PresentacionesModule {}
