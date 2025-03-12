import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [],
  providers: [PrismaClient],
})
export class AppModule {}
