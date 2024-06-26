import { Router } from "express";
import { getAllAppointmentsController, getAppointmentIdController, postAppointmentController, putAppointmentController } from "../controllers/appointmentControllers";

const appointmentRouter = Router();

appointmentRouter.get('/', getAllAppointmentsController);
appointmentRouter.get('/:id', getAppointmentIdController);
appointmentRouter.post('/register', postAppointmentController);
appointmentRouter.put('/status/:id',putAppointmentController);

export default appointmentRouter;

