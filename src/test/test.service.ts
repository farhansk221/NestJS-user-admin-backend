import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
     private Users = [
        {id:1,name:"farhan",age:21,role:"manager"},
        {id:2,name:"talha",age:22,role:"intern"},
        {id:3,name:"mizaan",age:24,role:"engineer"},

    ]

    findAll(role?:"intern" | "engineer" | "manager"){
        if(role){
            return this.Users.filter(user => user.role===role)
        }
        return {message:"Such Role of User not exists"};
    }

    findOne(id:number){
        const user = this.Users.find(user=> user.id===id)
        if(user) return user;
        return {message:"Not Found User with such"};
    }

    createOne(user: {id:number , name:string , age:number, role:"intern" | "engineer" | "manager"}){

        const genid = Date.now();
        const newUser = {
            genid,
            ...user
        }
        this.Users.push(newUser)
        return {newUser}

    }

    update(id:number,updateUser:{name?:string,age?:number,role?:"engineer"|"intern"|"manager"}){
        this.Users = this.Users.map(user=>{
          if(user.id===id) {
            return {...user,...updateUser}
          }
          return user
        })
        return this.findOne(id)
    }

    delete(id:number){
        const removeUser = this.findOne(id)
        this.Users = this.Users.filter(user=>{
            user.id!==id
        })
        return removeUser
    }

    
}
