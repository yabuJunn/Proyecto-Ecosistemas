import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://stbqwhdawwukcwyomgfi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0YnF3aGRhd3d1a2N3eW9tZ2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0OTEyMTgsImV4cCI6MjAyOTA2NzIxOH0.n2lqleI1jNhKMl3BeBRxcAY9Fkf4nJxTQm30wk0CFio')

export const roomsService = {
    getAllRooms: async () => {
        const { data, error } = await supabase
            .from('Rooms')
            .select()
        if (error) {
            throw new Error(error.message)
        }
        return data
    },
    getRoomById: async (id: string) => {

        const { data, error } = await supabase
            .from('Rooms')
            .select('id, name')
            .eq('id', id)
            .maybeSingle()

        if (error) {
            throw new Error(error.message)
        }
        return data
    }
}


// const { data, error } = await supabase
//   .from('cities')
//   .select('name, country_id')
//   .eq('name', 'Singapore')
//   .maybeSingle()