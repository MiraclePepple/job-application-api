import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobsRepository: Repository<Job>,
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobsRepository.find();
  }

  create(createJobDto: CreateJobDto): Promise<Job> {
    const job = this.jobsRepository.create(createJobDto);

    return this.jobsRepository.save(job);
  }

    async update(
  id: number,
  updateJobDto: UpdateJobDto,
     ): Promise<Job> {
  const job = await this.jobsRepository.findOne({
    where: { id },
    });

  if (!job) {
    throw new NotFoundException('Job not found');
    }

  Object.assign(job, updateJobDto);

  return this.jobsRepository.save(job);
    }
} 