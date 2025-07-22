import { Body, Controller, Post, Get } from '@nestjs/common';
import { EmpService } from './emp.service';
import { registerdto } from './registerdto/registerdto';
import { Emp } from './emp.schema';

@Controller('emp')
export class EmpController {
  constructor(private readonly empService: EmpService) {}

  @Post()
  create(@Body() Body: registerdto) {
    return this.empService.create(Body);
  }

  @Get()
  getall() {
    return this.empService.findall();
  }
}
