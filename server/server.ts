import { Socket } from "socket.io" //Instalando la libreria "@types/socket.io" y "@types/socket.io-client" podemos obtener los tipos de socket
import { Request, Response } from "express" //Instalando la libreria "@types/express" podemos obtener los tipos de express
import { z } from "zod" //Importamos zod para usarlo

//Importamos los tipos de las entidades que vamos a usar
import { roomType } from "../src/types/rooms"

//Importamos las bases de datos del modulo que esta en esta misma carpeta
import { roomsDatabase } from "./serverDatabase"

//Nota de TypeScript
//Para usar nodemon con typeScript tenemos que istalar esta version de nodemon: npm install --save-dev ts-node nodemon

const express = require('express') // Importo express
const http = require('http') //Importo htpp
const socketIO = require('socket.io') //Importo socket
const cors = require('cors') //Importo cors

const app = express() //Creo el servidor de express
const server = http.createServer(app) //Creo un servidor basando en http
const io = socketIO(server, { //Con el mismo servidor, creo el servidor de socket
    cors: {
        origin: "http://localhost:3000", //Le digo que permita el cors de esta ubicacion, es decir, de nuestro cliente
        methods: ["GET", "POST", "PUT", "PATCH"] //Le digo que permita los metodos http de GET y POST
    }
})

app.use(cors()) //Le indico que el servidor use cors

app.use(express.json()) //Le indico que el servidor use el midleware de express json para que me maneje las pareadas

const port = 5500 //Aqui indico que vamos a usar el puerto 5500 para alojar el servidor, recordar que estamos usando el puerto 3000 para el cliente

//Endpoints de Express

app.get('/', (req: Request, res: Response) => {

})

app.get('/rooms', (req: Request, res: Response) => {
    res.send(roomsDatabase)
})

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
        const enteringRoom = enterinRoomRequestSchema.safeParse(JSON.parse(data))
        if (!enteringRoom.success) {
            console.log("Error")
            console.log(enteringRoom)
            console.log(enteringRoom.error)
        } else {
            console.log("Success")
            console.log(enteringRoom.data)
        }
    })
})


//Este es el esuchador del servidor, es decir que lo lancemos en el puerto indicado, es decir, el 5500
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})