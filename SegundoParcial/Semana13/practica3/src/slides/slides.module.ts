import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlidesService } from './slides.service';
import { SlidesController } from './slides.controller';
import { SlidesGateway } from './slides.gateway';
import { Slide } from './entities/slide.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slide])],
  controllers: [SlidesController],
  providers: [SlidesService, SlidesGateway],
})
export class SlidesModule {}