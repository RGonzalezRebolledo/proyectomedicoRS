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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatientsServices = void 0;
const patients = [
    {
        credentialsId: 1,
        username: "ramongonzalez",
        password: "1234",
        name: "ramon gonzalalez",
        email: "ramongonzalez101",
        birthdate: new Date("31/10/1895"),
        nDni: "17395453",
        patientId: 1
    }
];
const getPatientsServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = patients;
    return allUsers;
});
exports.getPatientsServices = getPatientsServices;
