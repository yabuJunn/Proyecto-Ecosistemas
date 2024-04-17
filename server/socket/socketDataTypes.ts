import z from 'zod'

export interface updateRoomConnection {
    room: string,
    userType: "buyer" | "companion",
    userId: string
}

export const updateRoomConnectionSchema = z.object({
    room: z.string(),
    userType: z.enum(["buyer", "companion"]),
    userId: z.string()
})