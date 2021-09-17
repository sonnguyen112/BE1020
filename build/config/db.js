"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
require("dotenv").config();
const knex_1 = __importDefault(require("knex"));
const connection = (0, knex_1.default)({
    client: "sqlite3",
    connection: ":memory:",
    useNullAsDefault: true
});
exports.connection = connection;
function createTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connection.schema.createTable('examinee', function (table) {
            table.increments();
            table.string('username').notNullable();
            table.string('displayed_name').notNullable();
            table.string('password').notNullable();
        });
    });
}
createTable();
