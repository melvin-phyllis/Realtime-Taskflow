"use server"
import { auth } from "@/firebase/firebase_config"
import { formUserType } from "@/types"
import axios from "axios"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

const SendSiginServer = async (formUser: formUserType,) => {

    try {

        const data = await createUserWithEmailAndPassword(auth, formUser?.email!, formUser?.password!)
        
        const user = data?.user
        await sendEmailVerification(user)

        await axios.put(`${process.env.DATABASE_URL}/users-list/${user.uid}.json`, {
            firstname: formUser?.firstname,
            lastname: formUser?.lastname,
            name: formUser?.name,
            email: formUser?.email
        })

        console.log(data)
        return (

            { message: "Utilisateur Cree avec succes" }

        )


    } catch (error: any) {
        console.log(error)

        const messageError = error.message
        return ({ message: `${error.message}` })

    }

}

export default SendSiginServer
