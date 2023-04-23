export const LOAD_NEWS_START = 'LOAD_NEWS_START';
export const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'LOAD_NEWS_FAILURE';

export const loadNewsStart = () => ({
  type: LOAD_NEWS_START,
});

export const loadNewsSuccess = articles => ({
  type: LOAD_NEWS_SUCCESS,
  payload: articles,
});

export const loadNewsFailure = error => ({
  type: LOAD_NEWS_FAILURE,
  payload: error,
});


