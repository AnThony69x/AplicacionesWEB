import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Presentacion } from "./Presentacion";
import { Usuario } from "./Usuario";

@Entity()
export class Calificacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "decimal", precision: 5, scale: 2 })
  nota!: number;

  @Column({ nullable: true, type: "text" })
  observaciones!: string;

  @Column({ 
    type: 'timestamp', 
    default: () => 'CURRENT_TIMESTAMP' 
  })
  fecha_calificacion!: Date;

  @ManyToOne(() => Presentacion, presentacion => presentacion.calificaciones)
  @JoinColumn({ name: "presentacion_id" })
  presentacion!: Presentacion;

  @ManyToOne(() => Usuario, usuario => usuario.calificacionesRealizadas)
  @JoinColumn({ name: "docente_id" })
  docente!: Usuario;
}