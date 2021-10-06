import { UsersModule } from 'src/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleController } from './schedule.controller';
import { ScheduleEntity } from './schedule.entity';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleEntity]), UsersModule],
  exports: [ScheduleService],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule { }
