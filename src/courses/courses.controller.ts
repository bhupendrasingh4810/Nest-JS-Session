import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Courses } from './courses.mock';
import { CreateCourseDto } from './dto/createCourse.dto';

@Controller('courses')
export class CoursesController {
  courses = Courses;
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  listCourses() {
    return this.courses;
  }

  @Post()
  createCourse(@Body() createCourseDto: CreateCourseDto) {
    this.courses.push(createCourseDto);
    return createCourseDto;
  }

  @Get(':id')
  getCourse(@Param('id') id: number) {
    return this.courses.filter(course => course.id == id);
  }
}
