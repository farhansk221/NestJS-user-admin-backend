import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    constructor(private readonly testService:TestService){}

    @Get() //Get routes
    findAll(@Query('role') role?:'intern' | "engineer" | 'manager'){
        
        return this.testService.findAll(role);
    }

    @Get(':id') //get routes dynamic routing
    findOne(@Param('id') id:string){
        
        return this.testService.findOne(+id)
    }

    @Post() //Post request
    createOne(@Body() user:{id:number , name:string , age:number, role:"intern" | "engineer" | "manager"}){
        
        return this.testService.createOne(user)
    } 

    @Patch(':id')
    updateOne(@Param('id') id:string , @Body() userUpdate:{name?:string,age?:number,role?:"engineer"|"intern"|"manager"}){
        
        return this.testService.update(+id,userUpdate)
    }

    @Delete(':id')
    deleteOne(@Param('id') id:string){
        
        return this.testService.delete(+id)
    }
    
}


