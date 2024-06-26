import { PORT } from "./config/envs";
import server from "./server";

server.listen (PORT, () => {
console.log (`servidor recibiendo en el puerto ${PORT}`)
});
export default server;


