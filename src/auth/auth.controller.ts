import { UsersService } from './../users/users.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Param, Get, Put, Post, Req, UseGuards, Request, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth-guard';
import { JwtAuthGuard } from './jwt-auth-guard';
import { CreateUserDto } from 'src/users/dtos/create-users.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService, private usersService: UsersService) {
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }


}
