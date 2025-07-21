import { Model } from 'mongoose';
import { User } from './user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(email: string, username: string, password: string): Promise<User>;
    findByUsername(username: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    updateUser(id: string, data: Partial<User>): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    deleteUser(id: string): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
