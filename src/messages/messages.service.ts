import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient, Status } from '@prisma/client';
import { UpdateMessageDto } from './dto/update-message.dto';
import { CreateMessageDto } from './dto/create-message.dto';
import { statSync } from 'fs';

@Injectable()
export class MessagesService {
    constructor(private readonly prisma: PrismaClient) { }

    async isIdValid(id: number) {
        return await this.prisma.message.findUnique({
            where: { id }
        })
    }

    async updateMessage(id: number, updateMessageDto: UpdateMessageDto) {
        try {
            const idValid = await this.isIdValid(id)
            if (!idValid) {
                throw new HttpException("The id does not exist", HttpStatus.BAD_REQUEST)
            }
            if (![Status.RECEBIDO, Status.ENVIADO, Status.ERRO_DE_ENVIO].includes(updateMessageDto.status)) {
                throw new HttpException("Verify the field status", HttpStatus.BAD_REQUEST)
            }
            return await this.prisma.message.update({
                where: { id },
                data: {
                    status: updateMessageDto.status
                }
            })

        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async findAll() {
        return await this.prisma.message.findMany()
    }

    async createMessage(createMessageDto: CreateMessageDto) {
        return await this.prisma.message.create({
            data: {
                message: createMessageDto.message,
                phone: createMessageDto.phone,
                status: createMessageDto.status
            }
        })
    }

    async reportByStatus(status: Status) {
        if (![Status.RECEBIDO, Status.ENVIADO, Status.ERRO_DE_ENVIO].includes(status)) {
            throw new HttpException("Please verify the parameter status", HttpStatus.BAD_REQUEST)
        }
        return await this.prisma.message.findMany({
            where: {
                status: status
            }
        })
    }
}

