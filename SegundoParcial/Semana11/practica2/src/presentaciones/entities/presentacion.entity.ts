import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuarios/entities/usuario.entity';

@ObjectType()
@Entity()
export class Presentacion {
  @Field(() => ID, { description: 'ID de la presentación' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  autorId?: string;

  @Field(() => Usuario, { nullable: true })
  @ManyToOne(() => Usuario, { nullable: true })
  @JoinColumn({ name: 'autorId' })
  autor?: Usuario;
}
