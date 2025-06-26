import { Module } from '@nestjs/common';
import { PresentacionesService } from './presentaciones.service';
import { PresentacionesController } from './presentaciones.controller';
import { Presentacion } from './entities/presentacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Presentacion])],
  controllers: [PresentacionesController],
  providers: [PresentacionesService],
  exports: [TypeOrmModule],
})
export class PresentacionesModule {}
