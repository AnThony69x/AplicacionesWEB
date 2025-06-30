import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Nombre del usuario' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @Field(() =>String, { description: 'Correo del usuario' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  correo: string;
}
