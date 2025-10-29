import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("userId");

        if (!userId) {
            return NextResponse.json({ message: "userId requis" }, { status: 400 });
        }


        const data = await axios.get(`${process.env.DATABASE_URL}/tasks.json`)


        const List = Object.keys(data.data).map(key => ({
            id: key, ...data.data[key]
        }))




        return NextResponse.json({ message: "ok", List })



    } catch (error) {

        console.log(error)
        return NextResponse.json({ messsage: "z" })
    }
}
