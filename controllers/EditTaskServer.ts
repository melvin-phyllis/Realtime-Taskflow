import { formTasktType, userInfoType } from "@/types"
import axios from "axios"
import { FormEvent } from "react"

const EditTask = async (e: FormEvent<HTMLFormElement>, form: formTasktType, item: formTasktType, Update: (id: string, form: formTasktType) => void, usersinfo: userInfoType | null) => {
    try {
        e.preventDefault()
        const id = item?.id
        const req = await axios.post("/api/UpdateTask", { form, id ,usersinfo })
        console.log(req)
        Update(id!, form)
    } catch (error) {
        console.log(error)

    }

}

export default EditTask
