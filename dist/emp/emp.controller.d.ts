import { EmpService } from './emp.service';
import { registerdto } from './registerdto/registerdto';
import { Emp } from './emp.schema';
export declare class EmpController {
    private readonly empService;
    constructor(empService: EmpService);
    create(Body: registerdto): Promise<Emp>;
    getall(): Promise<Emp[]>;
}
