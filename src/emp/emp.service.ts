import { Injectable } from '@nestjs/common';

@Injectable()
export class EmpService {
  private employees: {
    username: string;
    phonenumber: string;
    address: string;
  }[] = [];

  create(employee: { username: string; phonenumber: string; address: string }) {
    this.employees.push(employee);
    return employee;
  }

  findAll() {
    return this.employees;
  }
}
