import { Status } from '@prisma/client'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateMessageDto {
    @IsNumber()
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    status?: Status

    @IsString()
    @IsNotEmpty()
    message: string

    @IsString()
    @IsNotEmpty()
    phone: string
}