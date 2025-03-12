import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, PrismaClient],
})
export class MessagesModule {}
