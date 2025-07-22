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
const registerdto_1 = require("./registerdto/registerdto");
let EmpController = class EmpController {
    empService;
    constructor(empService) {
        this.empService = empService;
    }
    create(Body) {
        return this.empService.create(Body);
    }
    getall() {
        return this.empService.findall();
    }
};
exports.EmpController = EmpController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registerdto_1.registerdto]),
    __metadata("design:returntype", void 0)
], EmpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpController.prototype, "getall", null);
exports.EmpController = EmpController = __decorate([
    (0, common_1.Controller)('emp'),
    __metadata("design:paramtypes", [emp_service_1.EmpService])
], EmpController);
//# sourceMappingURL=emp.controller.js.map