import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nombre!: string;
    @Column()
    correo!: string;
}