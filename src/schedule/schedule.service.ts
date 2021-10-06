
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateScheduleDto } from './dtos/create-schedule.dto';
import { ScheduleEntity } from './schedule.entity';

@Injectable()
export class ScheduleService {

  constructor(
    @InjectRepository(ScheduleEntity)
    private sRepository: Repository<ScheduleEntity>,
    private connection: Connection,
    private uService: UsersService,
  ) { }

  async findAll(): Promise<ScheduleEntity[]> {
    return await this.sRepository.find();
  }

  async add(model: CreateScheduleDto, req: any) {

    await this.sRepository.manager.transaction(async (manager) => {

      const u = new ScheduleEntity();

      model.usuario = req.user.userId;

      const obj = Object.assign(u, model);
      
      const marcadas = this.sRepository.count({ data: model.data, hora: model.hora });

      if (await marcadas == 0) {

        await manager.save(obj)

        this.uService.altUser(obj.usuario);

      }

    });

  }


}
