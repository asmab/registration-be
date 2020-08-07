import { Entity } from "typeorm";

@Entity('users')
export class User {
    //autoincrement
    id: number;
    email: string;
    password: string;
}