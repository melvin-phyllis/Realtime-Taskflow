import SendSiginServer from "@/server/SendSiginServer"
import { formUserType } from "@/types"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { FormEvent } from "react"

const Sigin = async (e: FormEvent<HTMLFormElement>, formUser: formUserType,route:AppRouterInstance) => {
    try {

        e.preventDefault()

        const req = await SendSiginServer(formUser)

        console.log(req)
        route.push("/connexion")
    } catch (error) {
        console.log("une erreur c'est produite")
    }
}

export default Sigin
