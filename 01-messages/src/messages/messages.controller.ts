import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getMessage() {}

  @Get(':id')
  getMessageById() {}

  @Post()
  addMessage() {}
}
