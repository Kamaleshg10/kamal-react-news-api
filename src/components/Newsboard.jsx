import { useEffect } from "react";
import { useState } from "react";
import NewsList from "./NewsList";
import React from 'react';


const Newsboard = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=86169f030416434fb2fb8b88a27a6a01`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setArticles(data.articles));
    }, [category]);
    return (
        <>
            <div className="back">
                <h1 className="text-center text-white py-3">
                    Latest <span className="badge bg-danger">News</span>
                </h1>
                <div className="container">
                    {articles.map((news, index) => {
                        return (
                            <NewsList
                                key={index}
                                title={news.title}
                                description={news.description}
                                src={news.urlToImage}
                                url={news.url}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Newsboard;
