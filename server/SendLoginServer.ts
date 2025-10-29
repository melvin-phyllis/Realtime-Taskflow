"use server"

import { auth } from "@/firebase/firebase_config";
import { formUserType } from "@/types";
import axios from "axios";
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";

export const SendLoginServer = async (formUser: formUserType) => {

    try {

        const data = await signInWithEmailAndPassword(auth, formUser?.email!, formUser?.password!)

        const user = data?.user

        if (!user.emailVerified) {

            await sendEmailVerification(user)
            return ({ message: "Valider votre compte avant toute connexion" })

        }


        const req = await axios.get(`${process.env.DATABASE_URL}/users-list/${user.uid}.json`)
        console.log(req?.data,user?.uid)

        return ({
            message: "Connexion Reussi", user: {
                id: `${user?.uid}`, firstname: req?.data?.firstname, lastname: req?.data?.lastname
            }
        })


    } catch (error: any) {


        console.log(error)

        return ({ message: `${error.message}` })
    }

}

