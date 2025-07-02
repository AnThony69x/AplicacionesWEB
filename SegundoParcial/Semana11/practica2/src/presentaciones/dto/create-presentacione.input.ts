import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, IsString, MaxLength, IsOptional, IsUUID } from 'class-validator';

@InputType()
export class CreatePresentacionInput {
  @Field()
  @IsNotEmpty({ message: 'El título no puede estar vacío' })
  @IsString({ message: 'El título debe ser una cadena de texto' })
  @MinLength(3, { message: 'El título debe tener al menos 3 caracteres' })
  @MaxLength(100, { message: 'El título no puede exceder 100 caracteres' })
  title: string;

  @Field()
  @IsNotEmpty({ message: 'La descripción no puede estar vacía' })
  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @MinLength(10, { message: 'La descripción debe tener al menos 10 caracteres' })
  @MaxLength(500, { message: 'La descripción no puede exceder 500 caracteres' })
  description: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsUUID('4', { message: 'El ID del autor debe ser un UUID válido' })
  autorId?: string;
}
