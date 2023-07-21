import React, { useState } from 'react';
import './App.css';

const movies = [
  {
    "id": 1,
    "title": "Inception",
    "genre": "Science Fiction",
    "releaseyear": "2010"
  },
  {
    "id": 2,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseyear": "1994"
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "genre": "Action",
    "releaseyear": "2008"
  }
];

export default function MovieList() {
  const listItems = movies.map(movie =>
    <li key = {movie.id}>
      <h2>{movie.title}</h2>
      <p>{movie.genre}</p>
      <p>{movie.releaseyear}</p>
    </li>
  );

  function handleClick() {
    alert('You clicked on {movies.title}!')
  }

  return (
    <div
      className="Movie"
      onClick={handleClick}>
      <h1>Movie List</h1>
      <ul>{listItems}</ul>
    </div>
  );
}
