import { Injectable } from '@nestjs/common';

import { Registration } from '../registration';
import { Registrations } from '../registrations';

@Injectable()
export class RegistrationsService {

    private readonly registrations: Registrations = {
        1: {
          id: 1,
          username: 'user 1',
          email: 'user1',
          password: 'password'
        },
        2: {
            id: 2,
            username: 'user 2',
            email: 'user2',
            password: 'password'
          }
      };

    findAll(): Registrations {
        return this.registrations;
    }

    create(newRegistration: Registration) : Registration {
        const id = new Date().valueOf();
        this.registrations[id] = {
          ...newRegistration,
          id,
        };
        return newRegistration;
    }
}
