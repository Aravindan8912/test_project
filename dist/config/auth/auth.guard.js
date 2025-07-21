"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('auth', () => ({
    secret: process.env.JWT_SECRET,
    expireIn: process.env.JWT_TOKEN_EXPIRESIN,
    audience: process.env.JWT_TOKEN_AUDIENCE,
    issuer: process.env.JWT_TOKEN_ISSUER,
    user: process.env.USER_SENDER_MAIL,
    pass: process.env.PASSWORD,
}));
//# sourceMappingURL=auth.guard.js.map