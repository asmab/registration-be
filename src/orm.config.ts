import { TypeOrmModuleOptions } from '@nestjs/typeorm'
export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: 'password',
    port: 5432,
    host: 'localhost',
    database: 'likeminded_db',
    synchronize: true,
    entities: [
        "src/**.module/*-model.ts"
    ],
}