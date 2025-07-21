import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: process.env.USER_SENDER_MAIL,
          pass: process.env.PASSWORD,
        },
      },
      defaults: {
        from: '"No Reply" <Vcodewonders.com>',
      },
    }),
    // ...other modules
  ], 
  providers: [MailService],
  controllers: [MailController],
})
export class mailModule {}
