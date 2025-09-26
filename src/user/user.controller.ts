import { Body, Controller,Get, HttpCode, NotFoundException, Param,ParseIntPipe,Post, Redirect, UseGuards, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { NotFoundError } from 'rxjs';
import { userDto } from './dto/user.dto';
import { FirewallGuard } from 'src/firewall/firewall.guard';

@Controller('user')
export class UserController {
    //Dependency Injection
    constructor(private readonly userService : UserService){}

    //Main Hoome page controllers
    @Get()
    getAllUser(){
        return this.userService.getAllUser();
    }

    @Get("/:id")
    getSingleUSer(@Param('id', ParseIntPipe) id:number){
        try{
            return this.userService.getSingleUser(id)
        }catch(error){
            throw new NotFoundException(error.message)
        }
        
    }

    @Post()
    @UseGuards(FirewallGuard)
    addUser(@Body(new ValidationPipe({transform:true})) user:userDto){
        return this.userService.addUser(user)
    }

    @Get('abcd/*')
    getUser(){
        return this.userService.getUser()
    }

    @Get('/some/:id')
    findOne(@Param() params:any):string{
        console.log(params.id)
        return `this action will return ${params.id}`
    }
   

    

}
