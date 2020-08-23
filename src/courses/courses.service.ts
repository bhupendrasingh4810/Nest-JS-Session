import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/createCourse.dto';
import { Courses } from './courses.mock';

@Injectable()
export class CoursesService {
  courses = Courses;
  listCourses() {
    return this.courses;
  }
  createCourse(createCourseDto: CreateCourseDto) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }
  getCourseById(id: number) {
    return this.courses.filter(course => course.id == id);
  }
}
