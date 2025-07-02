import { CreateSlideInput } from './create-slide.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class UpdateSlideInput extends PartialType(CreateSlideInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
