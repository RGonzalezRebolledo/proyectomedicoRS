
import { Router } from "express";
import { getCredencialNameController, getCredentiallsController, postCredentialController } from "../controllers/credentialControllers";


const credentialRouter = Router()

credentialRouter.get('/', getCredentiallsController);
credentialRouter.post('/register', postCredentialController)
credentialRouter.get('/name', getCredencialNameController)

export default credentialRouter;