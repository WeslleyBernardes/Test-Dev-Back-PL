import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildrensModule } from 'src/childrens/childrens.module';
import { Father } from './entities/father.entity';
import { FathersController } from './fathers.controller';
import { FathersService } from './fathers.service';

@Module({
      imports:[
          TypeOrmModule.forFeature([Father])
          ,ChildrensModule]
    , controllers:[FathersController]
    , providers:[FathersService]
})
export class FathersModule {}
