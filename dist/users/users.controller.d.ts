import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<import("./user.schema").User>;
    updateUser(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./user.schema").User, {}> & import("./user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
}
