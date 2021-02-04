import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { User } from './typeorm/entities/user';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  async index(): Promise<User[]> {
    const users = await this.userService.index();

    return users;
  }

  @Post()
  async create(@Body() data: CreateUserDTO): Promise<User> {
    const user = await this.userService.create(data);

    return user;
  }
}
