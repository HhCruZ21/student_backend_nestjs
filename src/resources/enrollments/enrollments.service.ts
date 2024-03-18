import { Injectable } from '@nestjs/common';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enrollment } from './entities/enrollment.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
  ) {}
  create(createEnrollmentDto: CreateEnrollmentDto) {
    return 'This action adds a new enrollment';
  }

  async findAll(): Promise<Enrollment[]> {
    return await this.enrollmentRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollment`;
  }

  update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    return `This action updates a #${id} enrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}
