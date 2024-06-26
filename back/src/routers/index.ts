import { Router } from "express";
import patientRouter from "./patientRouter";
import credentialRouter from "./credentialRouter";
import appointmentRouter from "./appointmentsRouter";
const router = Router();

router.use('/patient',patientRouter);
router.use('/credentials', credentialRouter);
router.use('/appointment', appointmentRouter);


export default router;
