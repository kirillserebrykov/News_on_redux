import { LOAD_NEWS_START, LOAD_NEWS_SUCCESS, LOAD_NEWS_FAILURE } from '../actions';

const initialState = {
  articles: [],
  loading: false,
  error: null,
};


export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEWS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_NEWS_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_NEWS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};