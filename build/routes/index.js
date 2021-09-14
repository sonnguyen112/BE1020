"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const indexController_1 = require("../controllers/indexController");
router.use("/timestamp", indexController_1.indexController.index);
router.use("/registrations", indexController_1.indexController.registrations);
module.exports = router;
