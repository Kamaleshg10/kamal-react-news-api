import news from '../assets/news.jpg'
import React from 'react';


const NewsList = ({ title, description, url, src }) => {
    return (
        
        <div className="card bg-dark text-light mb-3 my-3 mx-3" style={{ maxWidth: "245px" }} >
            <div className="card-body">
                <img src={src?src:news} className="card-img-top" alt="images" />
                <h5 className="card-title">{title.slice(0,45)}</h5>
                <p className="card-text">{description?description.slice(0,90):'News'}</p>
                <a href={url} className="btn btn-warning">
                    Read More...
                </a>
            </div>
        </div>
    );
};

export default NewsList;
