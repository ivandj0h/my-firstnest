import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUserDTO';

@Controller('user')
export class UserController {

    // This Method will be called when we hit the route /user/all
    @Get("all")
    findAll(): string {
        return "This action returns all users";
    };

    // This Method will be called when we hit the route /user/1
    @Get(":id")
    findOne(@Param('id') id:string) {
        return ({
            user: {
                id: id,
            }
        })
    }

    // This Method will be called when we hit the route /user
    @Post()
    create(@Body() createUserDTO: CreateUserDTO) {
        return createUserDTO;
    }
}
