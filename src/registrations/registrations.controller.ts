import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { Registrations } from '../registrations';
import { Registration } from '../registration';

@Controller('registrations')
export class RegistrationsController {
    constructor(private readonly usersService: RegistrationsService) {}

    @Get()
    async findAll(): Promise<Registrations> {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body('registration') user: Registration): void {
      this.usersService.create(user);
    }
}