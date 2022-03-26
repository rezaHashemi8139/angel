import { axiosInstance } from "./index";
import { IMember, IMemberId } from "../interFace/member";

const url = "members";

export const getAllMembers = () => {
  return axiosInstance.get<IMemberId[]>(url);
};

export const deleteMemberById = (id: string) => {
  return axiosInstance.delete(`${url}/${id}`);
};

export const updateMemberById = (id: number, body: IMember) => {
  return axiosInstance.put(`${url}/${id}`, body);
};

export const getMemberById = (id: string) => {
  return axiosInstance.get<IMemberId>(`${url}/${id}`);
};

export const addNewMember = (body: IMember) => {
  return axiosInstance.post(url, body);
};
