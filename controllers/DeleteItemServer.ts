import { formTasktType, userInfoType } from "@/types"
import axios from "axios"

const DeleteItemServer = async (item: formTasktType, GetTask: (item: formTasktType[]) => void, ListTAsk: formTasktType[], usersinfo: userInfoType | null) => {

    try {


        const id = item?.id

        const neuw_list = ListTAsk.filter((item: formTasktType) => item.id !== id)



        const req = await axios.delete(`/api/DeleteStackServer`, { data: { id, usersinfo } })


        
        GetTask(neuw_list)


    } catch (error) {

        console.log(error)

    }


}

export default DeleteItemServer
