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

    return (
        <div>
            <h1>SingleMovie</h1>
        </div>
    )
}
