import { CreateScheduleDto } from './dtos/create-schedule.dto';
import { ScheduleService } from './schedule.service';
import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@Controller('schedule')
export class ScheduleController {

  constructor(private service: ScheduleService) { }

  @UseGuards(JwtAuthGuard)
  //@UseGuards(LocalAuthGuard)
  @Get('index')
  async index() {
    var users = await this.service.findAll();
    return users;
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() model: CreateScheduleDto, @Req() req) {
    return await this.service.add(model, req);
  }

}
