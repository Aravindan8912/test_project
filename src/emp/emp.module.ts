import { Module } from '@nestjs/common';
import { EmpService } from './emp.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpController } from './emp.controller';
import { Emp, EmpSchema } from './emp.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Emp.name, schema: EmpSchema }])],
  controllers: [EmpController],
  providers: [EmpService],
})
export class EmpModule {}
