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
exports.indexController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("../config/db");
class IndexController {
    index(req, res) {
        return res.json({ "timestamp": Date.now() });
    }
    registrations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.method === "POST") {
                var username = req.body["username"];
                var displayed_name = req.body["displayed_name"];
                var password = req.body["password"];
                //hash password
                var salt = yield bcryptjs_1.default.genSalt(10);
                var hash = yield bcryptjs_1.default.hash(password, salt);
                var data = {
                    "username": username,
                    "displayed_name": displayed_name,
                    "password": hash
                };
                yield db_1.connection.insert(data).into("examinee");
                return res.json({ "error": 0 });
            }
            var list_examinee = yield db_1.connection.select().table("examinee");
            var ouput_list = [];
            for (var x of list_examinee) {
                ouput_list.push({
                    "username": x["username"],
                    "displayed_name": x["displayed_name"],
                    "hashed_password": x["password"]
                });
            }
            return res.json({
                "error": 0,
                "data": ouput_list
            });
        });
    }
}
const indexController = new IndexController;
exports.indexController = indexController;
