import axios from "axios";

export const register = async (userData) => {
  return axios.post("/api/auth/register", userData);
};

export const login = async (userData) => {
  return axios.post("/api/auth/login", userData);
};
