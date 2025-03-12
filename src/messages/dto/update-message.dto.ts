import { Status } from '@prisma/client'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class UpdateMessageDto {
    @IsNotEmpty()
    @IsOptional()
    status: Status
}