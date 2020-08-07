import { Injectable } from '@nestjs/common';

import { User } from '../user';
import { Users } from '../users';

@Injectable()
export class UsersService {

    private readonly users: Users = {
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

    findAll(): Users {
        return this.users;
    }

    create(newUser: User) : User {
        const id = new Date().valueOf();
        this.users[id] = {
          ...newUser,
          id,
        };
        return newUser;
    }
}
