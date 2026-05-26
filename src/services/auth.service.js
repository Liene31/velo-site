import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const authService = {
  login: async (userData) => {
    try {
      const response = await axios.post(`${url}/api/auth/login`, userData);
      return response.data;
    } catch (err) {
      console.error("Login failed:", err);
      throw err; // rethrow
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${url}/api/auth/register`, userData);

      console.log(response);
      return response.data;
    } catch (err) {
      console.error("Register failed:", err);
      throw err; // rethrow
    }
  },

  //on page refresh, sends saved token in localStorage to verify if it's valid
  //if yes, sends to front-end user details
  currentUser: async (token) => {
    try {
      const response = await axios.get(`${url}/api/auth/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      console.error("Issue with user verification:", err);
      throw err; // rethrow
    }
  },
};
