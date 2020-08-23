import { IsString, IsInt } from 'class-validator';

export class CreateCourseDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsString()
  about: string;
}
