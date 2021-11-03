import { 
    Body
    ,Controller
    ,Delete
    ,Get
    ,Param
    ,Patch
    ,Post
    ,UseGuards

} from '@nestjs/common';
import { CreateChildrenDto } from './dto/create-children.dto';
import { ChildrensService } from './childrens.service';
import { UpdateChildrenDto } from './dto/update-children.dto';
import { JwtGuard } from 'src/auth/jwt-guard';
import { RoleGuard } from 'src/auth/role.guard';

@Controller()
export class ChildrensController {
    constructor(private readonly childrenService: ChildrensService){};
    @Get('childrens')
    findAll(){
        return this.childrenService.findAll();
    }

    @Get('children/:id')
    findOne(@Param('id') id: string ){
        return this.childrenService.findOne(id);
    }
    @UseGuards(JwtGuard,RoleGuard)
    @Post('children')
    create(@Body() createChildrenDto: CreateChildrenDto){
        return this.childrenService.create(createChildrenDto);
    }
    @UseGuards(JwtGuard,RoleGuard)
    @Patch('children/:id')
    update(@Param('id') id:string,@Body() updateChildrenDto: UpdateChildrenDto){
        return this.childrenService.update(id,updateChildrenDto);
    }
    @UseGuards(JwtGuard,RoleGuard)
    @Delete('children/:id')
    delete(@Param('id') id:string){
        return this.childrenService.delete(id);
    }

}
