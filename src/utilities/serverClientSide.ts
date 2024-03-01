import { io } from "socket.io-client"; //Importamos el socket cliente

export const socket = io("http://localhost:5500")  //Es un objeto que nos permite usar algunas funcionalidades de socket, se relaciona entre el cliente y el servidor.

//Eventos de socket => Son los que provienen del servidor al cliente



