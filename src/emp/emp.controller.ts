import { Body, Controller, Post, Get } from '@nestjs/common';
import { EmpService } from './emp.service';

@Controller('emp')
export class EmpController {
  constructor(private readonly empService: EmpService) {}

  @Post()
  create(
    @Body() body: { username: string; phonenumber: string; address: string },
  ) {
    // Basic validation (optional)
    if (!body.username || !body.phonenumber || !body.address) {
      return { message: 'Missing required fields', data: null };
    }
    const employee = this.empService.create(body);
    return { message: 'Employee created', data: employee };
  }

  @Get()
  findAll() {
    const employees = this.empService.findAll();
    return { message: 'List of employees', data: employees };
  }
}
