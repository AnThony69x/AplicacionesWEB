import { IsEmail, IsNumber, IsIn, IsOptional, IsString, Length } from 'class-validator';
export class CreateUsuarioDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @Length(3, 50) 
    nombre: string;

    @IsEmail()
    correo: string;

    @IsString()
    @Length(4, 32)
    password: string;

    @IsString()
    @IsIn(['admin', 'usuario'])
    rol: string;
}
