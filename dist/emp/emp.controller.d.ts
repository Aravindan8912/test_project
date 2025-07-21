import { EmpService } from './emp.service';
export declare class EmpController {
    private readonly empService;
    constructor(empService: EmpService);
    create(body: {
        username: string;
        phonenumber: string;
        address: string;
    }): {
        message: string;
        data: null;
    } | {
        message: string;
        data: {
            username: string;
            phonenumber: string;
            address: string;
        };
    };
    findAll(): {
        message: string;
        data: {
            username: string;
            phonenumber: string;
            address: string;
        }[];
    };
}
