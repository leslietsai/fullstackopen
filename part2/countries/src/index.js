import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Countries from './components/Countries';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [ countries, setCountries ] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    console.log('effect');
    Axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  const handleSetFilter = (filter) => {
    setFilter(filter);
    const filtered = countries.filter(country => country.name.includes(filter));
    console.log(filtered);
    setFilteredCountries(filtered);
  }

  return (
    <div>
      <h2>find countries</h2>
      <SearchFilter filter={filter} setFilter={handleSetFilter}/>
      <Countries countries={filteredCountries}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
