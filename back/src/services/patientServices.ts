import { syncBuiltinESMExports } from "module";
import patientsDto from "../Dto/patientsDto";
import IPatients from "../interfaces/IPatients";
import { postCredentialServices } from "./credentialServices";


const patients: IPatients[] = [
    {
       credentialsId: 1,
        // username: "ramongonzalez",
        // password: "1234",
        name: "ramon gonzalalez",
        email: "ramongonzalez101",
        birthdate: new Date("31/10/1895"),
        nDni: "17395453",
        patientId: 1
     }
] ;


let patientId: number = 2;

export const getPatientsServices = async (): Promise<IPatients[]> =>{

    const allUsers = patients;
    return allUsers
};


export const getPatientsIdServices = async (id:number): Promise <IPatients | string> =>{

    const searchPatient = patients.find ((objeto)=> objeto.patientId === id);

    if (searchPatient){
        return searchPatient
    }
    return 'paciente no existe'
};

export  const postPatientServices = async (data: patientsDto): Promise <IPatients>=>{

    const password = data.password;
    const username = data.username;

    const newCredential = await postCredentialServices ({username, password});

    const credentialsId = newCredential;

    const newPatient = {
        credentialsId : credentialsId,
        name: data.name,
        email: data.email, 
        birthdate: data.birthdate,
        nDni: data.nDni,
        patientId,
    }
patientId++
patients.push(newPatient);
return newPatient
}