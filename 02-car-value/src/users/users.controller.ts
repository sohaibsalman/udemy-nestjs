import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Query,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  async findOneUser(@Param('id') id: string) {
    const user = await this.userService.findOne(parseInt(id));
    if (!user) throw new NotFoundException();

    return user;
  }

  @Get()
  async findByEmail(@Query('email') email: string) {
    return await this.userService.find(email);
  }

  @Patch('/:id')
  async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return await this.userService.update(parseInt(id), body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.delete(parseInt(id));
  }
}
