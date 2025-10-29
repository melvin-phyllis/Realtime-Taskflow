import axios from "axios"
import { NextResponse } from "next/server"

export const DELETE = async (req: Request) => {
    try {

        const { id,usersinfo } = await req.json()


        if (id != undefined) { await axios.delete(`${process.env.DATABASE_URL}/tasks/${usersinfo?.id}/${id}.json`); }


        return NextResponse.json({ message: "Element Supprimer avec succes" })
    } catch (error :any) {


        return NextResponse.json({ message: "une erreru c'est produite" })
    }
}
