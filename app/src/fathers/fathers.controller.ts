import {
          Body
        , Controller
        , Get
        , Param
        , Patch
        , Post
        , Delete,
        UseGuards
  
    } from '@nestjs/common';
import { JwtGuard } from 'src/auth/jwt-guard';
import { RoleGuard } from 'src/auth/role.guard';
import { CreateFatherDto } from './dto/create-father.dto';
import { UpdateFatherDto } from './dto/update-father.dto';
import { FathersService } from './fathers.service';

@Controller()
export class FathersController {
    constructor(private readonly fathersService: FathersService ){}

    @Get('fathers')
    findAll(){
        return this.fathersService.findAll();
    }
    @Get('father/:id')
    findOne( @Param('id') id: string ){
        return this.fathersService.findOne(id);
    }

    @UseGuards(JwtGuard,RoleGuard)
    @Post('father')
    create(@Body() createFatherDto: CreateFatherDto){
        return this.fathersService.create(createFatherDto);
    }
    
    @UseGuards(JwtGuard,RoleGuard)
    @Patch('father/:id')
    update(@Param('id') id:string, @Body() UpdateFatherDto: UpdateFatherDto ){
        return this.fathersService.update(id, UpdateFatherDto);
    }

    @UseGuards(JwtGuard,RoleGuard)
    @Delete('father/:id')
    remove(@Param('id') id: string){
        return this.fathersService.remove(id);
    }

    
}
