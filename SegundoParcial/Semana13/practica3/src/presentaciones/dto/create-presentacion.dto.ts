import { IsString, IsNumber, IsOptional, IsDateString, IsInt, Length, Min } from 'class-validator';

export class CreatePresentacionDto {

    @IsNumber()
    @IsOptional()
    id: number;
    
    @IsString()
    @Length(3, 100)
    titulo: string;

    @IsString()
    @Length(0, 250)
    descripcion: string;

    @IsDateString()
    fecha: string;

    @IsInt()
    @Min(1)
    usuarioId: number;
}
