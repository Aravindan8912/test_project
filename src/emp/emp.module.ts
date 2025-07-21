import { Module } from '@nestjs/common';
import { EmpService } from './emp.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpController } from './emp.controller';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // <-- This line is required!
  ],
  controllers: [EmpController],
  providers: [EmpService],
})
export class EmpModule {}
