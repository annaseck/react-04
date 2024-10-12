import React, { useState } from 'react';

const Filter = ({ handleFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const onFilterChange = () => {
    handleFilter({ title, rating });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Rechercher par titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rechercher par note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={onFilterChange}>Filtrer</button>
    </div>
  );
};

export default Filter;
