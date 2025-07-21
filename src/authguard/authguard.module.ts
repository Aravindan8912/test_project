import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './authguard.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_TOKEN_SECRET,
    }),
    forwardRef(() => UsersService),
  ],
  providers: [JwtAuthGuard],
  exports: [JwtAuthGuard, JwtModule],
})
export class AuthguardModule {}
