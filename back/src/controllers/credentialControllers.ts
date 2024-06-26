import { Response, Request } from "express";
import { getCredencialNameServices, getCredentialsServices, postCredentialServices } from "../services/credentialServices";
import ICredentials from "../interfaces/ICredentials";

export const getCredentiallsController = async (req:Request, res:Response) =>{
    const allCredentials: ICredentials[] = await getCredentialsServices ();
    res.json(allCredentials);
} 

export const postCredentialController = async (req:Request, res:Response) =>{
    const {username,password} = req.body
    const newCredential: number = await postCredentialServices ({username,password});
    res.json (newCredential);
};

export const getCredencialNameController = async (req:Request, res:Response)=>{

    const {username,password} = req.body
    
    const userNameCredential = await getCredencialNameServices ({username,password});
    
    res.json(userNameCredential);

};