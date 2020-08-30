import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  UseInterceptors,
  NotAcceptableException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
import { ErrorsInterceptor } from './common/interceptor/errors.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor, ErrorsInterceptor)
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    throw new NotAcceptableException();
    return this.authService.login(req.user);
  }

  @Get('/profile')
  @UseGuards(AuthGuard('jwt'))
  async profile(@Request() req) {
    return req.user;
  }
}
