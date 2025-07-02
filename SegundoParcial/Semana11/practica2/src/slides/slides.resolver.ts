import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SlidesService } from './slides.service';
import { Slide } from './entities/slide.entity';
import { CreateSlideInput } from './dto/create-slide.input';
import { UpdateSlideInput } from './dto/update-slide.input';

@Resolver(() => Slide)
export class SlidesResolver {
  constructor(private readonly slidesService: SlidesService) {}

  @Mutation(() => Slide)
  createSlide(@Args('createSlideInput') createSlideInput: CreateSlideInput) {
    return this.slidesService.create(createSlideInput);
  }

  @Query(() => [Slide], { name: 'slides' })
  findAll() {
    return this.slidesService.findAll();
  }

  @Query(() => Slide, { name: 'slide' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.slidesService.findOne(id);
  }

  @Mutation(() => Slide)
  updateSlide(@Args('updateSlideInput') updateSlideInput: UpdateSlideInput) {
    return this.slidesService.update(updateSlideInput.id, updateSlideInput);
  }

  @Mutation(() => Slide)
  removeSlide(@Args('id', { type: () => String }) id: string) {
    return this.slidesService.remove(id);
  }
}
