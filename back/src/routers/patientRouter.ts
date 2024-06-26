import { Router } from "express";
import { getPatientController, getPatientsIdController, postPatientController } from "../controllers/patientControllers";

const patientRouter = Router();

patientRouter.get('/', getPatientController);
patientRouter.get ('/:id', getPatientsIdController)
patientRouter.post('/register', postPatientController)

export default patientRouter;