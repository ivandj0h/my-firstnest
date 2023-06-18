import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {

    // @IsNotEmpty()
    name: string;
    // @IsNotEmpty()
    email: string;
    phone: string;
}