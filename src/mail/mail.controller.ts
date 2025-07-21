import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
    @Body('filePath') filePath: string,
  ) {
    await this.mailService.sendMailWithAttachment(to, subject, text, filePath);
    return { message: 'Email sent!' };
  }
}
