import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './resources/students/entities/student.entity';
import { Course } from './resources/courses/entities/course.entity';
import { Enrollment } from './resources/enrollments/entities/enrollment.entity';
import { StudentsModule } from './resources/students/students.module';
import { CoursesModule } from './resources/courses/courses.module';
import { EnrollmentsModule } from './resources/enrollments/enrollments.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        password: 'Password123',
        username: 'postgres',
        entities: [Student, Course, Enrollment],
        database: 'student',
        synchronize: true,
        logging: true,
      }),
    }),
    StudentsModule,
    CoursesModule,
    EnrollmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
