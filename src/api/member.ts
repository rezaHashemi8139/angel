import { axiosInstance } from "./index";
import { IMember } from "../interFace/member";
import { string } from "yup";

const url = "members";

export const getAllMembers = () => {
  return axiosInstance.get<IMember[]>(url);
};

export const deleteMemberById = (id: string) => {
  return axiosInstance.delete(`${url}/${id}`);
};
