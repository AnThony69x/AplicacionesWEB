import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentacionesService } from './presentaciones.service';
import { PresentacionesController } from './presentaciones.controller';
import { PresentacionesGateway } from './presentaciones.gateway';
import { Presentacion } from './entities/presentacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Presentacion])],
  controllers: [PresentacionesController],
  providers: [PresentacionesService, PresentacionesGateway],
})
export class PresentacionesModule {}