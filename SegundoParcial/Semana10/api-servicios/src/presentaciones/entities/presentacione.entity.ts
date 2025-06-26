import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Presentacione {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column()
    descripcion: string;

    @Column()
    fecha: string;

    @Column()
    usuarioId: number;
}
