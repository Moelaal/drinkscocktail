import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { cocktails, Loading } = useGlobalContext();
  if (Loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails</h2>;
  }
  return (
    <section className="section">
      <div className="section-title">
        <h1>Cocktail</h1>
      </div>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => (
          <Cocktail key={cocktail.id} {...cocktail} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
