import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("clientes")
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column({nullable: true})
    correo: string;
}
