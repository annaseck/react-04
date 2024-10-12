import React, { useState } from 'react';
import MovieList from './components/movieList';
import Filter from './components/filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8',
      rating: 5,
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the nature of reality.',
      posterURL: 'https://play-lh.googleusercontent.com/SPex4LxBKzJkk3SOt8qtlq05wW6NsoKjLEqHIIDmUtqRYhsIGtKpXZZbdBYLyqSulWP0Fn41xx8RCnXNNIA',
      rating: 4,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (filter) => {
    let filtered = movies;

    if (filter.title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    }

    if (filter.rating) {
      filtered = filtered.filter((movie) => movie.rating >= parseFloat(filter.rating));
    }

    setFilteredMovies(filtered);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]); // Met à jour également les films filtrés
  };

  return (
    <div className="app">
      <h1>Liste de films</h1>
      <Filter handleFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };
    addMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL de l'affiche"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Note (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        required
      />
      <button type="submit">Ajouter un film</button>
    </form>
  );
};

export default App;
