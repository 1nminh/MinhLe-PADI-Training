import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://659383491493b0116068a296.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  try {
    const response = await apiClient.get("/user");

    return response.data;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
