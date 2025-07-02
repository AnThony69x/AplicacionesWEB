import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })  
export class User {

  @Field(() => ID, { description: 'ID del usuario' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String, { description: 'Nombre del usuario' })
  @Column()
  nombre: string;

  @Field(() => String, { description: 'Correo del usuario' })
  @Column()
  correo: string;
}
