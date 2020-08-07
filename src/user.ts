export enum userRole {
    USER,
    MENTOR,
    AUTHOR
  }

export class User {
    readonly id: number;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly role: userRole
}
