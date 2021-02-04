import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './typeorm/entities/user';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDTO) {
    const userExists = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (userExists) {
      throw new HttpException('User already exists', 400);
    }

    const user = this.userRepository.create(data);
    await this.userRepository.save(user);

    return user;
  }

  async index(): Promise<User[]> {
    return this.userRepository.find();
  }
}
