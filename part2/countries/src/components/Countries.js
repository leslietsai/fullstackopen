import React, {useState}from 'react'

const Countries = ({countries}) => {
  const [ showCountry, setShowCountry ] = useState();

  if (countries.length > 10) {
      return (
          <p>Too many matches, specify another filter</p>
      )
  } else if (countries.length > 1) {
      return (
          <div>
            {countries.map(country => 
              <p key={country.name}>
                {country.name} 
                <button onClick={()=>setShowCountry(country)}>show</button>
              </p>
            )}
            {showCountry && <SingleCountryView country={showCountry}/>}
          </div>
      );
  } else if (countries.length === 1) {
      const country = countries[0]
      return <SingleCountryView country={country}/>;
  } else {
    return (
      <p>No matches</p>
    );
  }
}

const SingleCountryView = ({country}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        Capital: {country.capital} <br/>
        Population: {country.population}
      </p>
      <h3>Languages</h3>
      {country.languages.map(language => 
        <li key = {language.name}>{language.name}</li>
      )}
      <p>
        <img src={country.flag} alt="Flag" height="200"/>
      </p>
    </div>
  )
}

export default Countries;