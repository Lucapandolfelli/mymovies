import React, {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard';
import { get } from '../utils/api';

export default function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get("/discover/movie").then((data) => {
            console.log(data.results)
            setMovies(data.results);
        });
    }, []);

    return (
        <div className='container'>
            {movies.map((movie) => 
              <MovieCard key={movie.id} {...movie} />
            )}
        </div>
    );
};
