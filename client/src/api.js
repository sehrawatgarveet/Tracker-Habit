import axios from "axios";

const API_URL = "http://localhost:5000/api/habits"; // change if deployed

const api = {
  getHabits: async () => {
    return await axios.get(API_URL);
  },
  addHabit: async (name) => {
    return await axios.post(API_URL, { name });
  },
  updateStreak: async (id) => {
    return await axios.put(`${API_URL}/${id}`);
  },
  deleteHabit: async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
  },
};

export default api;
