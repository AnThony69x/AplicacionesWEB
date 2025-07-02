import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Presentacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    titulo: string;

    @Column({ length: 500 })
    descripcion: string;

    @Column({ type: 'date' })
    fecha: string; 

    @Column()
    usuarioId: number;
}