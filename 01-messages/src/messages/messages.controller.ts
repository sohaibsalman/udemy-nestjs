import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import { MessageDto } from './dto/MessageDto.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesServices: MessagesService) {}

  @Get()
  getMessages() {
    return this.messagesServices.findAll();
  }

  @Get(':id')
  getMessageById(@Param() { id }) {
    return this.messagesServices.findOne(id);
  }

  @Post()
  addMessage(@Body() body: MessageDto) {
    return this.messagesServices.add(body.content);
  }
}
