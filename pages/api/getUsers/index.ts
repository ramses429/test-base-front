import axios from "axios";
import { errorResonse } from "./errorResponse";
import { IResponseGetUserAxiosResult } from "./interfaces";

export async function getUsers(): Promise<IResponseGetUserAxiosResult> {
  try {
    const userAxiosResult = await axios.get("https://randomuser.me/api/");
    return userAxiosResult?.data.results
      ? userAxiosResult.data.results[0]
      : errorResonse.results[0];
  } catch (error) {
    console.error(error);
    return errorResonse.results[0];
  }
}
