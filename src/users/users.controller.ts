import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from '../users';
import { User } from '../user';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<Users> {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body('user') user: User): void {
      this.usersService.create(user);
    }
}