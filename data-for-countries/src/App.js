import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './Filter'
import ResultFilter from './ResultFilter'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [filter, setNewFilter] = useState('')

  function getCountriesFromServer(){
    const eventHandler = response => {
      setAllCountries(response.data)
      console.log(response.data)
    }

    function getCountries(){
      const urlCountries = 'https://restcountries.com/v3.1/all'
      return axios.get(urlCountries)
    }

    let promise = getCountries()    
    promise.then(eventHandler)
  }

  useEffect(getCountriesFromServer,[])
  
  function handleFilterChange(event) {
    setNewFilter(event.target.value)
  }

  return (
    <div>
    <p>find countries</p>
      <Filter filter={filter} handleClick={(event) => handleFilterChange(event)}/>
      <ResultFilter countriesData={allCountries.filter(elem => elem.name.common.includes(filter))} onChange={handleFilterChange}/>
    </div>
  );
}

export default App;
