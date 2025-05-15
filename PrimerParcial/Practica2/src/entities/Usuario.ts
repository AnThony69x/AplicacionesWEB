import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Presentacion } from "./Presentacion";
import { Calificacion } from "./Calificacion";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  password!: string;
  
  @Column({ 
    default: 'estudiante' // Puede ser 'estudiante' o 'docente'
  })
  tipo!: string;

  @OneToMany(() => Presentacion, presentacion => presentacion.usuario)
  presentaciones!: Presentacion[];
  
  @OneToMany(() => Calificacion, calificacion => calificacion.docente)
  calificacionesRealizadas!: Calificacion[];

  @Column({ 
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt!: Date;
}