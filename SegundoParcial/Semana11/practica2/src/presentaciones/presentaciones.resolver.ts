import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PresentacionesService } from './presentaciones.service';
import { Presentacion } from './entities/presentacion.entity';
import { CreatePresentacionInput } from './dto/create-presentacione.input';
import { UpdatePresentacionInput } from './dto/update-presentacione.input';

@Resolver(() => Presentacion)
export class PresentacionesResolver {
  constructor(private readonly presentacionesService: PresentacionesService) {}

  @Mutation(() => Presentacion)
  createPresentacion(@Args('createPresentacionInput') createPresentacionInput: CreatePresentacionInput) {
    return this.presentacionesService.create(createPresentacionInput);
  }

  @Query(() => [Presentacion], { name: 'presentaciones' })
  findAll() {
    return this.presentacionesService.findAll();
  }

  @Query(() => Presentacion, { name: 'presentacion' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.presentacionesService.findOne(id);
  }

  @Mutation(() => Presentacion)
  updatePresentacion(@Args('updatePresentacionInput') updatePresentacionInput: UpdatePresentacionInput) {
    return this.presentacionesService.update(updatePresentacionInput.id, updatePresentacionInput);
  }

  @Mutation(() => Presentacion)
  removePresentacion(@Args('id', { type: () => String }) id: string) {
    return this.presentacionesService.remove(id);
  }
}
