import { IsInt, IsNumber, IsOptional, Min, IsString, Length } from 'class-validator';

export class CreateSlideDto {

    @IsNumber()
    @IsOptional()
    id: number;

    @IsString()
    @Length(3, 100)
    titulo: string;

    @IsString()
    @Length(3, 500)
    contenido: string;

    @IsInt()
    @Min(1)
    orden: number;

    @IsInt()
    @Min(1)
    presentacionId: number;
}
