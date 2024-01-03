import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://659383491493b0116068a296.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUsersAPI = async () => {
  try {
    const response = await apiClient.get("/user");
    // return response.data;
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Error fetching users");
  }
};

export const deleteUserAPI = async (userId) => {
  try {
    const response = await apiClient.delete(`/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
    throw new Error("Error deleting user");
  }
};

export const createUserAPI = async (userData) => {
  try {
    const response = await apiClient.post("/user", userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Error creating user");
  }
};
