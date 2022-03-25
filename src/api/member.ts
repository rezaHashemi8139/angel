import {  axiosInstance} from "./index";

const url="members"

export const getAllMembers=()=>{
  return axiosInstance.get(url)
}