import { Request, Response } from 'express'

import express from 'express'
import { roomsDatabase } from '../serverDatabase'
export const roomsRouter = express.Router()

roomsRouter.route('/')
    .get((req: Request, res: Response) => {
        console.log("Rooms")
        res.send(roomsDatabase)
    })