import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const searchValue = useRef('');
  const { setSearchTerm } = useGlobalContext();
  useEffect(() => {
    searchValue.current.focus();
  }, []);
  const searchDrink = () => {
    setSearchTerm(searchValue.current.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">Search for Drinks</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchDrink}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
