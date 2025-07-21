"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpController = void 0;
const common_1 = require("@nestjs/common");
const emp_service_1 = require("./emp.service");
let EmpController = class EmpController {
    empService;
    constructor(empService) {
        this.empService = empService;
    }
    create(body) {
        if (!body.username || !body.phonenumber || !body.address) {
            return { message: 'Missing required fields', data: null };
        }
        const employee = this.empService.create(body);
        return { message: 'Employee created', data: employee };
    }
    findAll() {
        const employees = this.empService.findAll();
        return { message: 'List of employees', data: employees };
    }
};
exports.EmpController = EmpController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpController.prototype, "findAll", null);
exports.EmpController = EmpController = __decorate([
    (0, common_1.Controller)('emp'),
    __metadata("design:paramtypes", [emp_service_1.EmpService])
], EmpController);
//# sourceMappingURL=emp.controller.js.map