import { roomsService } from "../services/roomsService";
import { Request, Response } from 'express'

export const roomsController = {
    getAllRooms: async (req: Request, res: Response) => {
        try {
            const data = await roomsService.getAllRooms()
            res.json({ success: true, data })
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    },
    getRoomById: async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            console.log(id)
            const data = await roomsService.getRoomById(id)
            res.json({ success: true, data })
        } catch (error: any) {
            console.error("Error retrieving data from Supabase:", error.message);
            res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    }
}