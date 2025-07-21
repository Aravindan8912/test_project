"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthguardModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const authguard_service_1 = require("./authguard.service");
const users_service_1 = require("../users/users.service");
let AuthguardModule = class AuthguardModule {
};
exports.AuthguardModule = AuthguardModule;
exports.AuthguardModule = AuthguardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_TOKEN_SECRET,
            }),
            (0, common_1.forwardRef)(() => users_service_1.UsersService),
        ],
        providers: [authguard_service_1.JwtAuthGuard],
        exports: [authguard_service_1.JwtAuthGuard, jwt_1.JwtModule],
    })
], AuthguardModule);
//# sourceMappingURL=authguard.module.js.map