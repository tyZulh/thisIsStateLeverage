import axios from 'axios';
import React, { useState } from 'react';

import BeerCard from './BeerCard';

import './RandomBeer.css';

function RandomBeer() {
  const [randomBeer, setrandomBeer] = useState();

  const fetchRandomBeer = () => {
    axios.get('https://api.punkapi.com/v2/beers/random').then((res) => setrandomBeer(res.data[0]));
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <input className="RandomBeer-button text-4xl mb-10" type="button" value="GET BEER" onClick={fetchRandomBeer} />

      {randomBeer && <BeerCard name={randomBeer.name} abv={randomBeer.abv} ibu={randomBeer.ibu} description={randomBeer.description} />}
    </div>
  );
}

export default RandomBeer;
