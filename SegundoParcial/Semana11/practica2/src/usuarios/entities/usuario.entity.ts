import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Usuario {
  @Field(() => ID, { description: 'ID del usuario' })
  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ unique: true })
  email: string;
}
