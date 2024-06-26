import appointmentDto from "../Dto/appointmentDto";
import IAppointment from "../interfaces/IAppointment";
import ICredentials from "../interfaces/ICredentials";


const appointment: IAppointment[] = [
    {
       "appointmentId" : 1,
        "date" : "21/10/1985",
        "time": "7pm",
        "status": "Inactivo",
        "patientsId" : 1 
    }
];


let appointmentId:number = 2;

export const getAllAppointmentsServices = async (): Promise<IAppointment[]>=> {

    const allApointments = appointment;
    
    return allApointments;
}

export const getAppointmentIdServices = async (id: number): Promise <IAppointment | string> => {

    const searchId = appointment.find ((objeto) => objeto.appointmentId === id);

    if (searchId) {
        return searchId;
    }

    return 'turno no se encuentra registrado'
};


export const postAppointmentServices = async (data: appointmentDto): Promise <IAppointment> =>{

    const newAppointment = {
        appointmentId,
        date: data.date,
        time: data.time,
        status: data.status,
        patientsId : data.patientsId 
    }

    appointmentId++

    appointment.push (newAppointment);
    return newAppointment    
};

export const putAppointmentServices = async (id: number): Promise <IAppointment | string> => {

    const editAppointment = appointment.find ((objeto)=> objeto.appointmentId === id);

    if (editAppointment){
        editAppointment.status = 'cancelado';
    return editAppointment
    }

    return 'turno se se encuentra registrado'
};

