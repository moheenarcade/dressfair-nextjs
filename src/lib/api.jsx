import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_BASE_URL;

// Get catalogue list
export const getCatalogue = async () => {
  try {
    const res = await axios.get(`${API}/catalogue`);
    return res.data;
  } catch (error) {
    console.log("Catalogue API Error:", error);
    return { success: false, data: [] };
  }
};
