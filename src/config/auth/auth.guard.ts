import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  secret: process.env.JWT_SECRET,
  expireIn: process.env.JWT_TOKEN_EXPIRESIN,
  audience: process.env.JWT_TOKEN_AUDIENCE,
  issuer: process.env.JWT_TOKEN_ISSUER,
  user: process.env.USER_SENDER_MAIL,
  pass: process.env.PASSWORD,
}));
