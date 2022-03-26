import { axiosInstance } from "./index";
import { IMember } from "../interFace/member";

const url = "members";

export const getAllMembers = () => {
  return axiosInstance.get<IMember[]>(url);
};
