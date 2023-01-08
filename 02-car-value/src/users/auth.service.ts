import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { PasswordManager } from '../helpers/password-manager';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signup(email: string, password: string) {
    const user = await this.userService.find(email);
    if (user.length) throw new BadRequestException('Email already exists');

    const hashedPassword = await PasswordManager.generateHash(password);
    return await this.userService.create(email, hashedPassword);
  }

  async signin(email: string, password: string) {
    const [user] = await this.userService.find(email);
    if (!user) throw new NotFoundException('User not found');

    const isPasswordCorrect = PasswordManager.compare(user.password, password);
    if (!isPasswordCorrect)
      throw new BadRequestException('Invalid email or password');

    return user;
  }
}
