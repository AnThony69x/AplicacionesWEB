import { PartialType } from '@nestjs/mapped-types';
import { CreatePresentacioneDto } from './create-presentacione.dto';

export class UpdatePresentacioneDto extends PartialType(CreatePresentacioneDto) {}
