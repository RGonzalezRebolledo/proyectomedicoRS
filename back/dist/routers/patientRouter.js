"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientControllers_1 = require("../controllers/patientControllers");
const patientRouter = (0, express_1.Router)();
patientRouter.get('/', patientControllers_1.getPatientController);
exports.default = patientRouter;
