import { Controller, Post, Body, Patch, Param } from '@nestjs/common';

import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { UseAuth } from '../decorators/use-auth.decorator';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/user.entity';
import { ReportDto } from './dtos/report.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { ApproveReportDto } from './dtos/approve-report.dto';
import { IsAdmin } from '../decorators/is-admin.decorator';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}

  @Post()
  @UseAuth()
  @Serialize(ReportDto)
  async createReport(
    @CurrentUser() user: User,
    @Body() reportDto: CreateReportDto,
  ) {
    return await this.reportsService.create(reportDto, user);
  }

  @Patch('/:id')
  @IsAdmin()
  async approveReport(@Param('id') id: string, @Body() body: ApproveReportDto) {
    return await this.reportsService.approve(parseInt(id), body.isApproved);
  }
}
