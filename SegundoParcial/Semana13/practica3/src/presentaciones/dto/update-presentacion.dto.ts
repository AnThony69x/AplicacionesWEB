import { PartialType } from '@nestjs/mapped-types';
import { CreatePresentacionDto } from './create-presentacion.dto';

export class UpdatePresentacionDto extends PartialType(CreatePresentacionDto) {
  id: number;
}
