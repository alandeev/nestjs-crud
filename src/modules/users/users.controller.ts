import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FindOneParams } from './dto/find.dto';
import { UserRegisterDto } from './dto/register.dto';
import { UserUpdateDto } from './dto/update.dto';
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

  @Get(':id')
  getById(@Param() { id }: FindOneParams) {
    return this.userService.getById(Number(id));
  }

  @Put(':id')
  async update(@Body() data: UserUpdateDto, @Param() { id }: FindOneParams) {
    await this.userService.update(id, data);

    return data;
  }

  @Post()
  async create(@Body() data: UserRegisterDto): Promise<User> {
    const user = await this.userService.create(data);

    return user;
  }
}
