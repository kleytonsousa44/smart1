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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Whatsapp_1 = __importDefault(require("./Whatsapp"));
let SettingMessage = class SettingMessage extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SettingMessage.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], SettingMessage.prototype, "contacts", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], SettingMessage.prototype, "photo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], SettingMessage.prototype, "random", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SettingMessage.prototype, "limit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SettingMessage.prototype, "minutes", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SettingMessage.prototype, "seconds", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SettingMessage.prototype, "sendToday", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], SettingMessage.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], SettingMessage.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], SettingMessage.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Whatsapp_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], SettingMessage.prototype, "whatsappId", void 0);
SettingMessage = __decorate([
    sequelize_typescript_1.Table
], SettingMessage);
exports.default = SettingMessage;
