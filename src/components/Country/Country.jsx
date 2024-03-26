import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';


const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
  const {name, flags, population, area, cca3} = country;

  const [visited, setVisited] = useState(false);


  const handleVisited = () => {
    setVisited(!visited);
  }

  // const passWithParams = () =>handleVisitedCountry(country);
  




    return (
        <div className= {`Country ${visited ? 'visited' : 'non-visited'}`} >
            <h3 style={{color: visited ? 'purple' : 'black'}}>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area} </p>
            <p><small>Code: {cca3}</small></p>
           
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited Country.' : 'I want to visit this country'}
           <hr />
            <CountryDetail
            
              Country={country}
              handleVisitedCountry={handleVisitedCountry}
              handleVisitedFlags={handleVisitedFlags}
            
            ></CountryDetail>
        </div>
    );
};   

export default Country;


      

