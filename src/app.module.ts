import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailModule } from './mail/mail.module';
import { EmpController } from './emp/emp.controller';
import { EmpModule } from './emp/emp.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_URI ?? 'mongodb://localhost:27017/nest_auth',
    ),

    AuthModule,
    UsersModule,
    mailModule,
    EmpModule,
  ],
  // controllers: [EmpController],
})
export class AppModule {}
