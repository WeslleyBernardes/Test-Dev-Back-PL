import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Children } from './entities/children.entity';
import { CreateChildrenDto } from './dto/create-children.dto';
import { UpdateChildrenDto } from './dto/update-children.dto';
import { CreateFatherDto } from 'src/fathers/dto/create-father.dto';

@Injectable()
export class ChildrensService {
    constructor(
        @InjectRepository(Children)
        private readonly childrenRepository:Repository<Children>
    ){

    }
    findAll(){
        return this.childrenRepository.find();
    }
    findOne(id: string){

        //return `id: ${id}`;
        const children = this.childrenRepository.findOne(id);
        if(!children){
            throw new NotFoundException(`${id}: not found.`);
        }
        return children;
    }
    async create(createChildrenDto){
        const createChildren = this.childrenRepository.save(createChildrenDto)
        return createChildren;
    }
    async update(id:string,updateChildrenDto){
        return this.childrenRepository.save({
            id:id,
            ...updateChildrenDto
        });
    }
    async delete(id:string){
        const children = await this.childrenRepository.findOne(id);
        if(!children){
            throw new NotFoundException(`${id}: removido.`);
        }
        return this.childrenRepository.remove(children);
    }
}
