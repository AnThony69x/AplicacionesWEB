import { CreatePresentacionInput } from './create-presentacione.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdatePresentacionInput extends PartialType(CreatePresentacionInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
