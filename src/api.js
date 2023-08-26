import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchQuizzes = async () => {
    const response = await axios.get('/quizzes');
    return response.data;
  };