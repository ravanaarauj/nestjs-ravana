import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity('Schedule')
export class ScheduleEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, type: 'varchar', length: 10 })
    data: string;

    @Column({ nullable: false, type: 'varchar', length: 5 })
    hora: string;

    @Column({ nullable: false, type: 'varchar', length: 64 })
    usuario: string;
}
