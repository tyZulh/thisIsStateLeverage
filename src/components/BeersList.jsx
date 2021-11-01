import React, { useEffect, useState } from 'react';

import axios from 'axios';

import BeerCard from './BeerCard';

function BeersList() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeers = () => {
      axios.get('https://api.punkapi.com/v2/beers').then((res) => setBeers(res.data));
    };

    fetchBeers();
  }, []);

  const removeBeer = (id) => {
    const filteredBeers = beers.filter((beer) => beer.id !== id);
    setBeers(filteredBeers);
  };

  return (
    <div className="flex flex-wrap justify-around">
      {beers.map((beer) => {
        return (
          <BeerCard
            key={beer.id}
            name={beer.name}
            abv={beer.abv}
            ibu={beer.ibu}
            description={beer.description}
            id={beer.id}
            handleDelete={removeBeer}
          />
        );
      })}
    </div>
  );
}

export default BeersList;
