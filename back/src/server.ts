import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routers';

const server = express();

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use(router);

export default server;