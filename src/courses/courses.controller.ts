import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Request,
  HttpCode,
  ValidationPipe,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createCourse.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  listCourses() {
    return this.coursesService.listCourses();
  }

  @Post()
  createCourse(
    @Body()
    createCourseDto: CreateCourseDto,
  ) {
    return this.coursesService.createCourse(createCourseDto);
  }

  @Get(':id')
  getCourse(@Param('id') id: number) {
    return this.coursesService.getCourseById(id);
  }
}
