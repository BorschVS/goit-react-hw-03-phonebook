import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.Filter__label}>
      Find contact
      <input
        className={css.Filter__input}
        type="text"
        value={filter}
        onChange={onChange}
        placeholder="Rosie Simpson"
      />
    </label>
  );
};

export default Filter;
