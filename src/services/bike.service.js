import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const bikeService = {
  //get all bikes
  getAll: async () => {
    try {
      const response = await axios.get(`${url}/api/bikes`);
      return response.data;
    } catch (err) {
      console.error("Bike fetch failed:", err);
      throw err; // rethrow
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(`${url}/api/bikes/${id}`);
      return response.data;
    } catch (err) {
      console.error("Bike fetch failed:", err);
      throw err; // rethrow
    }
  },

  insert: async (bookingData) => {
    try {
      const response = await axios.post(`${url}/api/bikes`, bookingData);
      return response.data;
    } catch (err) {
      console.error("Bike post failed:", err);
      throw err; // rethrow
    }
  },

  update: async (id, bookingData) => {
    try {
      const response = await axios.put(`${url}/api/bikes/${id}`, bookingData);
      return response.data;
    } catch (err) {
      console.error("Bike update failed:", err);
      throw err; // rethrow
    }
  },

  delete: async (id) => {
    try {
      const response = await axios.delete(`${url}/api/bikes/${id}`);
      return response.data;
    } catch (err) {
      console.error("Bike deletion failed:", err);
      throw err; // rethrow
    }
  },
};
