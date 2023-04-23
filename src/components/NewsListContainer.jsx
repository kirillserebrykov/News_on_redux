import React, {useEffect} from 'react'
import NewsList from './NewsList';
import { fetchNews } from '../DLL';
import { useDispatch, useSelector } from 'react-redux';

const NewsListContainer = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const loading = useSelector((state) => state.news.loading);
  const error = useSelector((state) => state.news.error);
  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
    return <NewsList articles={articles} loading={loading} error={error}/>
};



export default NewsListContainer