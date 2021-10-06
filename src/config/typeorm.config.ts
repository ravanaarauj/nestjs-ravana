import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ScheduleEntity } from 'src/schedule/schedule.entity';
import { User } from 'src/users/users.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'consulta',
    entities: [User, ScheduleEntity],
    synchronize: true,
};