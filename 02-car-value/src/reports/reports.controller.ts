import { Controller, Post, Body } from '@nestjs/common';

import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { UseAuth } from '../decorators/use-auth.decorator';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { ReportDto } from './dtos/report.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) { }

    @Post()
    @UseAuth()
    @Serialize(ReportDto)
    createReport(@CurrentUser() user: User, @Body() reportDto: CreateReportDto) {
        return this.reportsService.create(reportDto, user);
    }
}
