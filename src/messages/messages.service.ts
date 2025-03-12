import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
    constructor(private readonly prisma: PrismaClient) {}

    async updateMessage(id: number, updateMessageDto: UpdateMessageDto) {
        return await this.prisma.message.update({
            where: { id },
            data: {
                status: updateMessageDto.status
            }
        })
    }

    async findAll() {
        return 'teste'
    }

}

