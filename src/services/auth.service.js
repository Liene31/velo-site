import axios from "axios";

export const authService = {
  login: async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        userData,
      );
      return response.data;
    } catch (err) {
      console.error("Login failed:", err);
      throw err; // rethrow
    }
  },
};
