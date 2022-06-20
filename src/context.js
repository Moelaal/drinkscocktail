import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktail = drinks.map((item) => {
          const { idDrink, strAlcoholic, strDrink, strGlass, strDrinkThumb } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            glass: strGlass,
            image: strDrinkThumb,
            info: strAlcoholic,
          };
        });
        setCocktails(newCocktail);
      } else {
        setCocktails([]);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{ loading, searchTerm, setSearchTerm, cocktails }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
