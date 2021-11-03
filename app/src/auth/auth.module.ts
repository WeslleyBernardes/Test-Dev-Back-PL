import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
    imports:[
        JwtModule.register({
            secret:'dcba543210'
            , signOptions: {
                expiresIn: '60h'
            }
        })
    ],
    controllers:[AuthController],
    providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}