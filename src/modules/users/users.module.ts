import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { UserProviders } from './typeorm/repositories/userRepository';
import { TypeormModule } from 'src/shared/typeorm/typeorm.module';

@Module({
  controllers: [UsersController],
  imports: [TypeormModule],
  providers: [...UserProviders, UserService],
})
export class UsersModule {}
