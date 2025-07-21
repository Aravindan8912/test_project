import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMailWithAttachment(to: string, subject: string, text: string, filePath: string): Promise<void>;
}
