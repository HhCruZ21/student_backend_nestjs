import { Course } from 'src/resources/courses/entities/course.entity';
import { Student } from 'src/resources/students/entities/student.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum GradeValue {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
}

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Student, { cascade: true })
  student: Student;

  @ManyToOne(() => Course, { cascade: true })
  course: Course;

  @Column()
  enrollmentDate: Date;

  @Column({ type: 'enum', enum: GradeValue, default: GradeValue.F })
  grade: GradeValue;
}
