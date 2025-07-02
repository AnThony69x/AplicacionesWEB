import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateSlideInput {
  @Field()
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El título no puede exceder 100 caracteres' })
  title: string;

  @Field()
  @IsNotEmpty({ message: 'El contenido no puede estar vacío' })
  @IsString({ message: 'El contenido debe ser una cadena de texto' })
  @MinLength(5, { message: 'El contenido debe tener al menos 5 caracteres' })
  @MaxLength(2000, { message: 'El contenido no puede exceder 2000 caracteres' })
  content: string;
}
