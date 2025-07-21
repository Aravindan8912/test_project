import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { User } from '../users/user.schema';
import { UsersService } from '../users/users.service';
declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
export interface AuthenticatedRequest extends Request {
    user: User;
}
export declare class JwtAuthGuard implements CanActivate {
    private jwtService;
    private usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
