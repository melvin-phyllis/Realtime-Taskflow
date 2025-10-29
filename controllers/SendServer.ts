import { ToastSucces } from "@/Toast/Toast"
import { formTasktType, userInfoType } from "@/types"
import axios from "axios"
import { Dispatch, FormEvent, SetStateAction } from "react"

const SendServer = async (e: FormEvent<HTMLFormElement>, form: formTasktType, setload: Dispatch<SetStateAction<boolean>>, add: (item: formTasktType) => void,usersinfo:userInfoType | null) => {

    try {
        setload(true)
        e.preventDefault()
        const req = await axios.post("/api/AddTaskServer", {
            form,usersinfo
        })
        const id =req?.data.id
            console.log(id)


        add({ ...form,id })


        ToastSucces(req?.data?.message)

    } catch (error) {
        console.log(error)
    } finally {
        setload(false)
    }
}



export default SendServer
