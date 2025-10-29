import axios from "axios"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {

    try {
        const { form,usersinfo } = await req.json()
        if (!form || !usersinfo) return
        const res = await axios.post(`${process.env.DATABASE_URL}/tasks/${usersinfo?.id}.json`, { ...form })


        return NextResponse.json({ message: "New Task well added", id: res?.data.name })


    } catch (error) {
       
        return NextResponse.json({ message: 'une erreru c\'est produite' })
    }

}
