
import React from 'react';
import News from './News';
import { useGetNewsQuery } from '../DLL';

function NewsList() {
    const { data, error, isLoading } = useGetNewsQuery()
    console.log(data)
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    return (
        data &&  data.articles.map((article, index) =>{
            return  <News key={index} title={article.title} urlToImage={article.urlToImage} description={article.description} author={article.author}/>
        })
    );
}

export default NewsList;

