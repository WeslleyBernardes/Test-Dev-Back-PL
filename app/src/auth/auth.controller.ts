import { RoleGuard } from './role.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthService } from './auth.service';
import { JwtGuard } from './jwt-guard';
import { Role } from './role.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @Post('login')
    auth(@Body() body){
        return { token: this.authService.login(body.username, body.password) };
    }

    //@Role('admin')
    @UseGuards(JwtGuard,RoleGuard)
    @Get('test-auth')
    test(@Req() req) {
        console.log(req.user);
            return {
            name: 'Weslley',
        };
    }
}
