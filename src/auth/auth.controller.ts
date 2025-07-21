import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDto) {
    return this.authService.register(body.email, body.username, body.password);
  }

  @Post('login')
  async login(@Body() body: LoginDto, @Res() res: Response) {
    const { accessToken, refreshToken } = await this.authService.login(
      body.email,
      body.password,
    );
    res
      .cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: false, // set to true in production
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: 'Logged in. Refresh token stored in cookie.',
        accessToken,
        // <-- This will show in Postman
      });
  }
}
