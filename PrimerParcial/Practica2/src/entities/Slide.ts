import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Presentacion } from "./Presentacion";

@Entity()
export class Slide {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  numero!: number;

  @Column()
  titulo!: string;

  @Column({ type: "text" })
  contenido!: string;

  // Aquí está el cambio: añadir nullable: true
  @Column({ nullable: true })
  imagen_url!: string;

  @ManyToOne(() => Presentacion, presentacion => presentacion.slides)
  @JoinColumn({ name: "presentacion_id" })
  presentacion!: Presentacion;
}