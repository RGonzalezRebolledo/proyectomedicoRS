import { Request, Response } from "express";
import { getAllAppointmentsServices, getAppointmentIdServices, postAppointmentServices, putAppointmentServices } from "../services/appoinmentServices";

export const getAllAppointmentsController = async (req:Request, res:Response) => {

    const allApointments = await getAllAppointmentsServices();
    res.json(allApointments);
};

export const getAppointmentIdController = async (req:Request, res:Response)=>{
  const id = req.params.id;
  
  const appointmentid = await getAppointmentIdServices (Number(id));

  res.json(appointmentid);
};

export const postAppointmentController = async (req:Request, res:Response) => {
  
    const {date,time,status,patientsId} = req.body

    const newAppointment = await postAppointmentServices ({date,time,status,patientsId});

    res.json(newAppointment);

}

export const putAppointmentController = async (req:Request, res:Response) => {
const id = req.params.id

const editAppointment = await putAppointmentServices(Number(id));

res.json(editAppointment);
};
