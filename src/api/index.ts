import axios from "axios";

const config = {
  baseURL: `${process.env.REACT_APP_BASE_API}api/`,
  headers: { "Content-Type": "application/json" },
};

export const axiosInstance = axios.create(config);
