import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { type } from 'os';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FathersModule } from './fathers/fathers.module';
import { ChildrensModule } from './childrens/childrens.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
         AuthModule
        ,FathersModule
        ,ChildrensModule
        ,TypeOrmModule.forRoot({
            type:'postgres'
          , host:'db'
          , port: 5432
          , username: 'postgres'
          , password: 'root'
          , database: 'store'
          , entities: ['/src/**/*.entity.js']
          , autoLoadEntities: true
          , synchronize: true
        })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
