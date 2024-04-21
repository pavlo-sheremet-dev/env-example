import axios from "axios";

const API_KEY = import.meta.VITE_API_KEY;

export const getImages = async () => {
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${API_KEY}`
  );
  return data;
};

//
