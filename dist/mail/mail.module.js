"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const mail_controller_1 = require("./mail.controller");
const mail_service_1 = require("./mail.service");
const dotenv = require("dotenv");
dotenv.config();
let mailModule = class mailModule {
};
exports.mailModule = mailModule;
exports.mailModule = mailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
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
        ],
        providers: [mail_service_1.MailService],
        controllers: [mail_controller_1.MailController],
    })
], mailModule);
//# sourceMappingURL=mail.module.js.map