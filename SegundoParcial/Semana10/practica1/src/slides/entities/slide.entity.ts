import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Slide {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    contenido: string;

    @Column()
    orden: number;

    @Column()
    presentacionId: number;
}
