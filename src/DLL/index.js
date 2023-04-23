import axios from 'axios';
import { loadNewsStart, loadNewsSuccess, loadNewsFailure } from '../BLL/actions';

export const loadNews = () => {
  return async (dispatch) => {
    dispatch(loadNewsStart());
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=ua&apiKey=${import.meta.env.VITE_API_TOKEN}`);
      dispatch(loadNewsSuccess(response.data.articles));
    } catch (error) {
      dispatch(loadNewsFailure(error.message));
    }
  };
};
