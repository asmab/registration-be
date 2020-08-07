import { Module } from '@nestjs/common';
import { RegistrationsModule } from './registrations/registrations.module';
import { RegistrationsController } from './registrations/registrations.controller';
import { RegistrationsService } from './registrations/registrations.service';

@Module({
  imports: [RegistrationsModule],
  controllers: [RegistrationsController],
  providers: [RegistrationsService],
})
export class AppModule {}
