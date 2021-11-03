import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChildrensController } from './childrens.controller';
import { ChildrensService } from './childrens.service';
import { Children } from './entities/children.entity';

@Module({
      imports:[TypeOrmModule.forFeature([Children])]
    , controllers:[ChildrensController]
    , providers:[ChildrensService]
})
export class ChildrensModule {}
