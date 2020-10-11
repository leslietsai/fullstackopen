import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import ContactForm from './components/ContactForm';
import Persons from './components/Persons';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [filter, setFilter] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} setFilter={setFilter}/>
      <h2>Add new number</h2>
      <ContactForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={persons.filter(person => person.name.includes(filter))}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
