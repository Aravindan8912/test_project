"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpModule = void 0;
const common_1 = require("@nestjs/common");
const emp_service_1 = require("./emp.service");
const mongoose_1 = require("@nestjs/mongoose");
const emp_controller_1 = require("./emp.controller");
const emp_schema_1 = require("./emp.schema");
let EmpModule = class EmpModule {
};
exports.EmpModule = EmpModule;
exports.EmpModule = EmpModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: emp_schema_1.Emp.name, schema: emp_schema_1.EmpSchema }])],
        controllers: [emp_controller_1.EmpController],
        providers: [emp_service_1.EmpService],
    })
], EmpModule);
//# sourceMappingURL=emp.module.js.map