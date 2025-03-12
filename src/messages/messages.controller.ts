import { Body, Controller, Get, Post, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Status } from '@prisma/client';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) { }

  @Get()
  async findAllMessages() {
    return await this.messagesService.findAll()
  }

  @Patch(':id')
  async updateMessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMessageDto: UpdateMessageDto) {
    return await this.messagesService.updateMessage(id, updateMessageDto)
  }

  @Post()
  async createMessage(
    @Body() createMessageDto: CreateMessageDto) {
    return await this.messagesService.createMessage(createMessageDto)
  }

  @Get(':status')
  async reportByStatus(@Param('status') status: Status) {
    return await this.messagesService.reportByStatus(status)
  }

}
