import { Body, Controller, Get, Post, Patch, Param, ParseIntPipe} from '@nestjs/common';

import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(
    private readonly jobsService: JobsService,
  ) {}

  @Get()
  findAll() {
    return this.jobsService.findAll();
  }

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.create(createJobDto);
  }

  @Patch(':id')
  update(
  @Param('id', ParseIntPipe) id: number,
  @Body() updateJobDto: UpdateJobDto,
    ) {
  return this.jobsService.update(id, updateJobDto);
    }
}