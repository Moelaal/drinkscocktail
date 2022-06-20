import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, info, category, glass, image }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <footer className="cocktail-footer">
        <h1>{name}</h1>
        <h3>{glass}</h3>
        <p>{info}</p>
        <div className="btn-container">
          <Link to={`/cocktail/${id}`}>
            <button className="btn btn-details">Details</button>
          </Link>
        </div>
      </footer>
    </article>
  );
};

export default Cocktail;
