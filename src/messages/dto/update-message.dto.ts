import { Status } from '@prisma/client'
import { IsNotEmpty, IsNumber } from 'class-validator'

export class UpdateMessageDto {
    @IsNumber()
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    status: Status
}