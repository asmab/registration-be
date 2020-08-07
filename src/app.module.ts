import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from './orm.config'

@Module({
  imports: [TypeOrmModule.forRoot(config), UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
