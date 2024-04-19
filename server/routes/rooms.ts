import { Request, Response } from 'express'

import express from 'express'
import { roomsDatabase } from '../serverDatabase'
import { roomsController } from '../controllers/roomsController'
export const roomsRouter = express.Router()

roomsRouter.get('/', roomsController.getAllRooms)

roomsRouter.get('/:id', roomsController.getRoomById)