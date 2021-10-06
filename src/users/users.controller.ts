import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { UserRole } from './users.role';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @UseGuards(JwtAuthGuard)
    //@UseGuards(LocalAuthGuard)
    @Get('index')
    async index(@Req() req) {
        if (req.user.perfil != UserRole.SERVIDOR) {
            return [];
        }
        var users = await this.usersService.findAll();
        return users;
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() user: CreateUserDto) {
        return await this.usersService.add(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put('update/:id')
    async update(@Param() params, @Body() user: CreateUserDto) {
        return await this.usersService.update(params.id, user);
    }

}
