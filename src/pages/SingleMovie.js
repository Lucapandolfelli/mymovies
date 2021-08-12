import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { get } from '../utils/api';

export default function SingleMovie() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
          });
    }, [movieId]);
    
    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div>
            <img src={imageUrl} alt={movie.title} />
            <div>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <ul>
                    {movie.genres.map((genre) => (
                        <li>{genre.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
