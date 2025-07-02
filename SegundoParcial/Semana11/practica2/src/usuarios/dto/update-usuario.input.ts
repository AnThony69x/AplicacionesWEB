import { CreateUsuarioInput } from './create-usuario.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
@InputType()
export class UpdateUsuarioInput extends PartialType(CreateUsuarioInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
