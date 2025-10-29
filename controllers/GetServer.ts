import { formTasktType, userInfoType } from "@/types";
import axios from "axios";

const GetServer = async (
  GetTask: (item: formTasktType[]) => void,
  usersinfo: userInfoType | null
) => {
  if (!usersinfo?.id) {
    console.warn(
      "Impossible de charger les tâches : aucun identifiant utilisateur fourni."
    );
    return;
  }

  try {
    const req = await axios.get("/api/GetTaskServer", {
      params: { userId: usersinfo.id },
    });
    GetTask(req.data?.List ?? []);
  } catch (error) {
    console.log("une erreur c'est produite");
    return "une erreur c'est produite ";
  }
};

export default GetServer;
