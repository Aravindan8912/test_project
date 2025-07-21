import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { SendMailOptions } from 'nodemailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMailWithAttachment(
    to: string,
    subject: string,
    text: string,
    filePath: string,
  ) {
    await this.mailerService.sendMail({
      to,
      subject,
      text,
      attachments: [
        {
          filename: filePath.split('/').pop(), // or any name you want
          path: filePath, // absolute or relative path to file
        },
      ],
    } as SendMailOptions);
  }
}
