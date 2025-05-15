import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Presentacion } from "./Presentacion";

@Entity()
export class Tema {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column({ nullable: true })
  descripcion!: string;
  
  @ManyToMany(() => Presentacion, presentacion => presentacion.temas)
  presentaciones!: Presentacion[];
}