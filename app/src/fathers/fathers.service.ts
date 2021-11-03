import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import internal from 'stream';
import { Repository } from 'typeorm';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { Father } from './entities/father.entity';
import { Children } from 'src/childrens/entities/children.entity';


@Injectable()
export class FathersService {
    constructor(
        @InjectRepository(Father)
        private readonly fatherRepository:Repository<Father>
    ){

    }
    // private fathers: Father[] = [
    //     {
    //           id:1
    //         , name: 'Rolisso'
    //         , characteristics: 'Caramelo'
    //         , childrens: ['Flora','Pedrita']
    //     }
    // ];


    findAll(){
        return this.fatherRepository.find({ relations: ["childrens"] });
    }
    findOne(id: string){
        
        const father = this.fatherRepository.findOne(id,{ relations: ["childrens"] });

        if(!father){          
            throw new NotFoundException(`${id}: not found.`);
        }
        return father;
    }
    
    async create(createFatherDto){
        
        const father = this.fatherRepository.save(createFatherDto);
        return father;
        
    }
    async update(id:string, updateFatherDto){
        return this.fatherRepository.save({
            id:id,
            ...updateFatherDto
        });
    }
    async remove(id:string){
        /*
            CONCLUÍDO
        */
        const father = await this.fatherRepository.findOne(id);
        if(!father){
            throw new NotFoundException(`${id}: removido.`);
        }
        return this.fatherRepository.remove(father);
    }

    
       
}


