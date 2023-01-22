import { Controller, Post, Body } from '@nestjs/common';

import { ReportsService } from './reports.service';
import { CreateReportDto } from './dtos/create-report.dto';
import { UseAuth } from 'src/decorators/use-auth.decorator';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) { }

    @Post()
    @UseAuth()
    createReport(@Body() reportDto: CreateReportDto) {
        return this.reportsService.create(reportDto);
    }
}
