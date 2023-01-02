import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const data = this.getFileContent();
    return data[id];
  }

  async findAll() {
    return this.getFileContent();
  }

  async add(content: string) {
    const data = this.getFileContent();
    const id = Date.now();
    data[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(data));
  }

  private async getFileContent() {
    const data = await readFile('messages.json', { encoding: 'utf-8' });
    return JSON.parse(data);
  }
}
