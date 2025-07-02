import { IsInt, IsOptional, IsString, IsNotEmpty, Length, Min } from 'class-validator';

export class CreateSlideDto {
    
    @IsOptional()
    id?: number;

    @IsString()
    @IsNotEmpty()
    @Length(3, 100)
    titulo: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 500)
    contenido: string;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    orden: number;

    @IsInt()
    @IsNotEmpty()
    @Min(1)
    presentacionId: number;
}