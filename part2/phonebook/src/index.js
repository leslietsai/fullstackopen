import ContactsService from './services/contacts'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import ContactForm from './components/ContactForm';
import Persons from './components/Persons';
import SearchFilter from './components/SearchFilter';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [filter, setFilter] = useState('');

  useEffect(() => {
    ContactsService.getAll().then(contacts => setPersons(contacts))
  }, []);

  const handleUpdateContact = (id, contact) => {
    ContactsService.update(id, contact).then(response => setPersons(
      persons.map(person => person.id !== id ? person : response)
    ));
  }

  const handleCreateContact = (contact) => {
    ContactsService.create(contact).then(response => setPersons(persons.concat(response)));
  }

  const handleDelete = (id) => {
    ContactsService.remove(id).then(setPersons(
      persons.filter(person => person.id !== id)
    ))
  }

  const filterPersons = () => {
    console.log(persons);
    return persons.filter(person => person.name.includes(filter));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} setFilter={setFilter}/>
      <h2>Add new number</h2>
      <ContactForm persons={persons} setPersons={handleCreateContact} updatePersons={handleUpdateContact}/>
      <h2>Numbers</h2>
      <Persons persons={filterPersons()} deletePerson={handleDelete}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
