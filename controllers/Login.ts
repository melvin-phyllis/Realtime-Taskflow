import { SendLoginServer } from "@/server/SendLoginServer"
import { ToastError, ToastSucces } from "@/Toast/Toast"
import { formUserType } from "@/types"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { FormEvent } from "react"

const Login = async (e: FormEvent<HTMLFormElement>, formUser: formUserType, route: AppRouterInstance) => {
    try {

        e.preventDefault()

        const req = await SendLoginServer(formUser)



        if (req?.message) {

            req?.message == "Firebase: Error (auth/invalid-credential)." ? ToastError("Email ou Mots de passe incorrect") :
                req?.message == "Valider votre compte avant toute connexion" ? ToastError("Valider votre compte avant toute connexion") :
                    req?.message == "Firebase: Error (auth/too-many-requests)." ? ToastError("Vous avez essayer de vous connecter un trop nombre de fois") :
                        req?.message == "Connexion Reussi" && ToastSucces("Connexion Reussis")

        }

        if (req?.user) {
            localStorage.setItem("user", JSON.stringify(
                { id: req?.user?.id, lastname: req?.user?.lastname, firstname: req?.user?.firstname }))

            route.push("/todolist")

        }




    } catch (error) {

        console.log("une erreur c'est produite")

    }
}

export default Login
