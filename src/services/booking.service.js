import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const bookingService = {
  //get all bookings
  getAll: async () => {
    try {
      const response = await axios.get(`${url}/api/booking`);

      return response.data;
    } catch (err) {
      console.error("Booking fetch failed:", err);
      throw err; // rethrow
    }
  },

  insert: async (bookingData) => {
    try {
      const response = await axios.post(`${url}/api/booking`, bookingData);
      return response.data;
    } catch (err) {
      console.error("Booking post failed:", err);
      throw err; // rethrow
    }
  },
};
