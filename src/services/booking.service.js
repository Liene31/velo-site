import axios from "axios";

export const bookingService = {
  //get all bookings
  getAll: async () => {
    try {
      const response = await axios.get(`/api/booking`);

      return response.data;
    } catch (err) {
      console.error("Booking fetch failed:", err);
      throw err; // rethrow
    }
  },

  insert: async (bookingData) => {
    try {
      const response = await axios.post(`/api/booking`, bookingData);
      return response.data;
    } catch (err) {
      console.error("Booking post failed:", err);
      throw err; // rethrow
    }
  },
};
