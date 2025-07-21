import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(email: string, username: string, password: string): Promise<import("../users/user.schema").User>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
