import { Get, Injectable } from '@nestjs/common';
import { error } from 'console';
import { userDto } from './dto/user.dto';

@Injectable()
export class UserService {
    private users = [
        {id:1,name:"Farhan",type:"Celelbrity"},
        {id:2, name:"Kiyara",type:"normal"},
    ]

    
    getAllUser(){
        return this.users;
    }

    
    getSingleUser(id:number){
        const user =  this.users.find((user)=> user.id===id)
        if(!user){
            throw new Error("User Not Found")
        }
        return user;
    }

    
    addUser(user:userDto){
        const id = Date.now()
        this.users.push({
            id,
            ...user
        })
        return this.getSingleUser(id)
    }

    getUser(){
        return this.getAllUser()
    }
    


}
