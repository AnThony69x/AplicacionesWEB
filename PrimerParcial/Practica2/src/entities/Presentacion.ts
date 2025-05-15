import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinColumn, JoinTable } from "typeorm";
import { Usuario } from "./Usuario";
import { Slide } from "./Slide";
import { Tema } from "./Tema";
import { Calificacion } from "./Calificacion";

@Entity()
export class Presentacion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column({ nullable: true })
  descripcion!: string;

  @Column()
  archivo_pdf!: string;

  @Column({ 
    type: 'timestamp', 
    default: () => 'CURRENT_TIMESTAMP' 
  })
  fecha_creacion!: Date;
  
  @Column({ nullable: true })
  fecha_exposicion!: Date;

  @ManyToOne(() => Usuario, usuario => usuario.presentaciones)
  @JoinColumn({ name: "usuario_id" })
  usuario!: Usuario;

  @OneToMany(() => Slide, slide => slide.presentacion, { cascade: true })
  slides!: Slide[];
  
  @ManyToMany(() => Tema)
  @JoinTable({
    name: "presentacion_tema",
    joinColumn: {
      name: "presentacion_id",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "tema_id",
      referencedColumnName: "id"
    }
  })
  temas!: Tema[];
  
  @OneToMany(() => Calificacion, calificacion => calificacion.presentacion)
  calificaciones!: Calificacion[];
}