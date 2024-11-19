import axios from "axios";
import { getToken } from "../utils/auth";

const API_URL = "http://localhost:5000/api";

export const getAssignedRides = async () => {
  const token = getToken();
  const response = await axios.get(`${API_URL}/drivers/rides`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateAvailability = async (status) => {
  const token = getToken();
  const response = await axios.put(
    `${API_URL}/drivers/availability`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
