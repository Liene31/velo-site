import axios from "axios";

export const bikeService = {
  //get all bikes
  getAll: async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/bikes`);
      return response.data;
    } catch (err) {
      console.error("Bike fetch failed:", err);
      throw err; // rethrow
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/bikes/${id}`);
      return response.data;
    } catch (err) {
      console.error("Bike fetch failed:", err);
      throw err; // rethrow
    }
  },

  insert: async (bookingData) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/bikes`,
        bookingData,
      );
      return response.data;
    } catch (err) {
      console.error("Bike post failed:", err);
      throw err; // rethrow
    }
  },
};
