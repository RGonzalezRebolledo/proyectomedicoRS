import { Request, Response } from "express";
import { getPatientsIdServices, getPatientsServices, postPatientServices } from "../services/patientServices";
import IPatients from "../interfaces/IPatients";
import patientsDto from "../Dto/patientsDto";

export const getPatientController = async (req:Request, res:Response) =>{

    const allUsers = await getPatientsServices();
    res.json(allUsers);
} ;

export const getPatientsIdController = async (req:Request, res:Response) =>{

        const id = req.params.id

        const idUser = await getPatientsIdServices (Number(id))
        res.json (idUser);
};

export const postPatientController = async (req:Request, res:Response)=>{
  const {username,password,name,email,birthdate,nDni} = req.body

  const newPatient = await postPatientServices ({username,password,name,email,birthdate,nDni});

  res.json(newPatient);

};



