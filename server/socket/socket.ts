import z from 'zod'
import { Socket } from "socket.io"
import { app } from "../server"
import { roomsDatabase } from '../serverDatabase'
import { Server } from 'socket.io';
import { createServer } from 'http';

export const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000", //Le digo que permita el cors de esta ubicacion, es decir, de nuestro cliente
        methods: ["GET", "POST", "PUT", "PATCH"] //Le digo que permita los metodos http de GET y POST
    }
});

//Eventos de socket (Todo lo que vaya dentro de estos metodos son las funciones que determinaran que hara el servidor cuando reciba un evento de ese tipo)

//El evento connection pasa cuando un cliente se conecta por primera vez al servidor.
io.on('connection', (socket: Socket) => {
    console.log('A user has connected from:')
    console.log(socket.client.request.headers.origin)
    socket.on('enteringRoom', (data: any) => {
        console.log("Entering Room")
        const enterinRoomRequestSchema = z.object({
            userId: z.string(),
            roomId: z.string()
        })
        const enteringRoomParse = enterinRoomRequestSchema.safeParse(JSON.parse(data))
        if (enteringRoomParse.success) {
            console.log("Success")
            const enteringRoom = roomsDatabase.find(room => room.code === enteringRoomParse.data.roomId)
            if (enteringRoom !== undefined) {
                socket.emit('responseRoom', JSON.stringify({
                    roomId: enteringRoom.code,
                    conection: "prueba",
                    message: "Room is avilable"
                }))
            } else {
                socket.emit('responseRoom', JSON.stringify({
                    conection: "unavailable",
                    message: "Room is not found"
                }))
            }
        } else {
            console.log("Error")
            console.log(enteringRoomParse.error)
        }
    })
})
