import { ToastSucces } from "@/Toast/Toast"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const Logout = (router: AppRouterInstance) => {
    localStorage.removeItem("user")

    router.push('/')

    ToastSucces("Vous avez ete Deconnecter avec succes")

}

export default Logout
