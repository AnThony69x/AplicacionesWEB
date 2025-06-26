import { Module } from '@nestjs/common';
import { PresentacionesService } from './presentaciones.service';
import { PresentacionesController } from './presentaciones.controller';
import { Presentacione } from './entities/presentacione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Presentacione])],
  controllers: [PresentacionesController],
  providers: [PresentacionesService],
  exports: [TypeOrmModule],
})
export class PresentacionesModule {}
