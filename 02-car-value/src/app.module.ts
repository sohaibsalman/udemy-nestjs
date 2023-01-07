import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { ReportsController } from './reports/reports.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [ReportsModule, UsersModule],
  controllers: [AppController, ReportsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
