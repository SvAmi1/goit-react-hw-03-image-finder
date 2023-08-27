import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = "38225856-55cf092e00195e84cd316d5f4";

export const fetchImages = async (query, page) => {
    const response = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
  };