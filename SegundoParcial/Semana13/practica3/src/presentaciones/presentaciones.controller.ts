import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresentacionesService } from './presentaciones.service';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';

@Controller('presentaciones')
export class PresentacionesController {
  constructor(private readonly presentacionesService: PresentacionesService) {}

  @Post()
  create(@Body() createPresentacioneDto: CreatePresentacionDto) {
    return this.presentacionesService.create(createPresentacioneDto);
  }

  @Get()
  findAll() {
    return this.presentacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presentacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresentacioneDto: UpdatePresentacionDto) {
    return this.presentacionesService.update(+id, updatePresentacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presentacionesService.remove(+id);
  }
}
