
import React from 'react';
import News from './News';
function NewsList({ articles, loading, error, loadNews }) {
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }
    return (
        articles &&  articles.map((article, index) =>{
            return  <News key={index} title={article.title} urlToImage={article.urlToImage} description={article.description} author={article.author}/>
        })
    );
}

export default NewsList;

