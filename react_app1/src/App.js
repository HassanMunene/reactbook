import React from 'react';
import { useEffect } from 'react';

// OMDB API KEY  6a1de686

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6a1de686'

const App = () => {
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search)
    }
    useEffect(() => {
        searchMovie('Spiderman')
    }, [])
    return (
        <h1>Yoo man!</h1>
    );
}

export default App;