import { IsEmail, IsIn, IsOptional, IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateUsuarioDto {

    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @Length(3, 50)
    nombre: string;

    @IsEmail()
    @IsNotEmpty()
    correo: string;

    @IsString()
    @IsNotEmpty()
    @Length(4, 32)
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['admin', 'usuario'])
    rol: string;
}