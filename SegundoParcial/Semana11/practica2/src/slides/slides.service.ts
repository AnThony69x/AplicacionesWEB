import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slide } from './entities/slide.entity';
import { CreateSlideInput } from './dto/create-slide.input';
import { UpdateSlideInput } from './dto/update-slide.input';

@Injectable()
export class SlidesService {
  constructor(
    @InjectRepository(Slide)
    private readonly slideRepository: Repository<Slide>,
  ) {}

  create(createSlideInput: CreateSlideInput): Promise<Slide> {
    const slide = this.slideRepository.create(createSlideInput);
    return this.slideRepository.save(slide);
  }

  findAll(): Promise<Slide[]> {
    return this.slideRepository.find();
  }

  async findOne(id: string): Promise<Slide> {
    const slide = await this.slideRepository.findOneBy({ id });
    if (!slide) {
      throw new Error(`Slide with id ${id} not found`);
    }
    return slide;
  }

  async update(id: string, updateSlideInput: UpdateSlideInput): Promise<Slide> {
    await this.slideRepository.update(id, updateSlideInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Slide> {
    const slide = await this.findOne(id);
    await this.slideRepository.delete(id);
    return slide;
  }
}
