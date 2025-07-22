import { Emp } from './emp.schema';
import { Model } from 'mongoose';
import { registerdto } from './registerdto/registerdto';
export declare class EmpService {
    private empModel;
    constructor(empModel: Model<Emp>);
    create(data: registerdto): Promise<Emp>;
    findall(): Promise<Emp[]>;
}
