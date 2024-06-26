import credentialsDto from "../Dto/credentialsDto";
import ICredentials from "../interfaces/ICredentials";

const credentials: ICredentials[] = [{
    credentialId: 1,
    username: 'ramongonzalez',
    password: '4321'
}];

let credentialId: number = 2;

export const getCredentialsServices = async (): Promise <ICredentials[]> =>{

    const allCredentials = credentials;

    return allCredentials;

};

export const postCredentialServices = async (data:credentialsDto): Promise<number> =>{
const newCredential: ICredentials = {
    credentialId,
    username: data.username,
    password: data.password
} 
credentialId++
credentials.push(newCredential);
return newCredential.credentialId
};

export const getCredencialNameServices = async (data:credentialsDto): Promise <number | string >=>{
    const searchCredential: ICredentials | undefined = credentials.find((objeto)=> objeto.username === data.username);

    if (searchCredential) {
    
    if (searchCredential.password === data.password) {

        return searchCredential.credentialId; 
    } else {

        return "el password no coincide"
    }
       
    }

    return "el Usuario es incorrecto"


    };