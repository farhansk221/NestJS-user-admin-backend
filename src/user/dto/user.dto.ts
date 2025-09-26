import {MinLength,IsString, validate} from 'class-validator'
import { Transform } from 'class-transformer';
import { UserService } from '../user.service';

export class userDto{

    @Transform(({value})=>{
        if(value==='farhan') return "Hussain"
        return value;
    })
    @IsString()
    @MinLength(3)
    name:string;
    type:string;
}

