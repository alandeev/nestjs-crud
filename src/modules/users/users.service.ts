import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserRegisterDto } from './dto/register.dto';
import { UserUpdateDto } from './dto/update.dto';
import { User } from './typeorm/entities/user';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async create(data: UserRegisterDto) {
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

  async getById(user_id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(user_id);

      return user;
    } catch {
      throw new HttpException('User not found', 400);
    }
  }

  async update(user_id: number, data: UserUpdateDto) {
    try {
      await this.userRepository.update(user_id, data);
    } catch {
      throw new HttpException('Ocorred problem in the try update user', 400);
    }
  }
}
