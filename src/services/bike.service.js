import axios from "axios";

export const bikeService = {
  //get all bikes
  getAll: async () => {
    try {
      const response = await axios.get(`/api/bikes`);
      return response.data;
    } catch (err) {
      console.error("Bike fetch failed:", err);
      throw err; // rethrow
    }
  },

  getById: async (id) => {
    try {
      const response = await axios.get(`/api/bikes/${id}`);
      return response.data;
    } catch (err) {
      console.error("Bike fetch failed:", err);
      throw err; // rethrow
    }
  },

  insert: async (bookingData) => {
    try {
      const response = await axios.post(`/api/bikes`, bookingData);
      return response.data;
    } catch (err) {
      console.error("Bike post failed:", err);
      throw err; // rethrow
    }
  },

  update: async (id, bookingData) => {
    try {
      const response = await axios.put(`/api/bikes/${id}`, bookingData);
      return response.data;
    } catch (err) {
      console.error("Bike update failed:", err);
      throw err; // rethrow
    }
  },

  delete: async (id) => {
    try {
      const response = await axios.delete(`/api/bikes/${id}`);
      return response.data;
    } catch (err) {
      console.error("Bike deletion failed:", err);
      throw err; // rethrow
    }
  },
};
