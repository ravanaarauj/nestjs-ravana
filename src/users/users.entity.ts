import { UserRole } from './users.role';
import {
    BaseEntity,
    Entity,
    Unique,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, type: 'varchar', length: 150 })
    nome: string;

    @Column({ nullable: false, type: 'varchar', length: 10 })
    nascimento: string;

    @Column({ nullable: false, type: 'varchar', length: 15 })
    cpf: string;

    @Column({ nullable: false, type: 'varchar', length: 16 })
    sus: string;

    @Column({ nullable: true, type: 'varchar', length: 100 })
    username: string;

    @Column({ nullable: true, type: 'varchar', length: 100 })
    password: string;

    @Column({ nullable: true, type: 'enum', enum: UserRole, default: UserRole.PACIENTE })
    perfil: string;

    @Column({ nullable: false, type: 'int' })
    consultas: number;//

}
