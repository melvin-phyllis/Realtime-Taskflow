import axios from "axios"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {

        const { form, id, usersinfo } = await req.json()

        if (!form || !id || !usersinfo?.id) {
            return NextResponse.json({ message: "Champs manquants" }, { status: 400 })
        }

        await axios.patch(
            `${process.env.DATABASE_URL}/tasks/${usersinfo.id}/${id}.json`,
            form
        )

        return NextResponse.json({ message: "ok" })
    } catch (error) {

        return NextResponse.json({ message: "une erreru c'est produite" })
    }
}
