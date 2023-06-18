import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get("all")
    findAll(): string {
        return "This action returns all users";
    };
}
