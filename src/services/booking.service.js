import axios from "axios";
import { getDefaultStore } from "jotai";
import { authUserAtom } from "../atoms/token.atom.js";

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

  getById: async (id) => {
    try {
      const response = await axios.get(`${url}/api/booking/${id}`);
      return response.data;
    } catch (err) {
      console.error("Booking fetch failed:", err);
      throw err; // rethrow
    }
  },

  insert: async (bookingData) => {
    //Specific to Jotai how to use outside React
    const userData = getDefaultStore().get(authUserAtom);
    const token = userData.token;

    try {
      const response = await axios.post(`${url}/api/booking`, bookingData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      console.error("Booking post failed:", err);
      throw err; // rethrow
    }
  },
};
