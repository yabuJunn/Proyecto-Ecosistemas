import { io } from "socket.io-client"; //Importamos el socket cliente
import { changeScreen } from "../store/actions";
import { ScreensTypes } from "../types/screens";
import { dispatch } from "../store";

export const socket = io("http://localhost:5500")  //Es un objeto que nos permite usar algunas funcionalidades de socket, se relaciona entre el cliente y el servidor.

interface responseRoomData {
    roomId?: string,
    conection: string,
    message: string
}

//Eventos de socket => Son los que provienen del servidor al cliente

socket.on('responseRoom', (data: string) => {
    const responseRoomJSON: responseRoomData = JSON.parse(data)
    console.log(responseRoomJSON)
    if (responseRoomJSON.conection === "prueba") {
        dispatch(
            changeScreen(ScreensTypes.whoAreYouPage, true)
        )
    } else {
        alert("Room code invalid")
    }
})

