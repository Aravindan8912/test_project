import { Injectable } from '@nestjs/common';
import { Emp } from './emp.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { registerdto } from './registerdto/registerdto';

@Injectable()
export class EmpService {
  constructor(@InjectModel(Emp.name) private empModel: Model<Emp>) {}
  async create(data: registerdto): Promise<Emp> {
    const emp = new this.empModel(data);
    return emp.save();
  }

  async findall(): Promise<Emp[]> {
    return this.empModel.find().exec();
  }
}
