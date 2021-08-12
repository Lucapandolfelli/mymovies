import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const IMG_MOVIES = 'https://image.tmdb.org/t/p/w1280';

export default function MovieCard({ id, title, poster_path }){
    return (
        <Router>
            <Link to={"/movie/" + id}>
                <div className='card'>
                    <img src={IMG_MOVIES + poster_path} alt={title} />
                </div>
            </Link>
        </Router>
    );
};
