import { MailService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendMail(to: string, subject: string, text: string, filePath: string): Promise<{
        message: string;
    }>;
}
