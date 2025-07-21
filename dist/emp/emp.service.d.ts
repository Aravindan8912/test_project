export declare class EmpService {
    private employees;
    create(employee: {
        username: string;
        phonenumber: string;
        address: string;
    }): {
        username: string;
        phonenumber: string;
        address: string;
    };
    findAll(): {
        username: string;
        phonenumber: string;
        address: string;
    }[];
}
