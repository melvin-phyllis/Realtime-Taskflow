import { NextResponse } from "next/server"

export const POST = async (req: Request) => {

    try {
        const { formUser } = await req.json()



    } catch (error) {


        return NextResponse.json({ message: "une erreur c'est produite" })
    }
}
