import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(    
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, 
  ) 
  {}
  
  
  create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userRepository.save({
      ...updateUserInput,
      id,
    });
  }

  remove(id: string) {
    return this.userRepository.delete(id);
  }
}