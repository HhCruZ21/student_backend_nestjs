import { IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  id: string;
}
