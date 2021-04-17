import ContactsService from './services/contacts'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import ContactForm from './components/ContactForm';
import Persons from './components/Persons';
import SearchFilter from './components/SearchFilter';
import Notification, { ErrorNotification } from './components/Notification';

const App = () => {
  const [persons, setPersons ] = useState([]) 
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    ContactsService.getAll().then(contacts => setPersons(contacts))
  }, []);

  const showMessage = (message) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const showErrorMessage = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const handleUpdateContact = (id, contact) => {
    ContactsService.update(id, contact).then(response => {setPersons(
      persons.map(person => person.id !== id ? person : response)
    )
    showMessage(`Updated ${contact.name}`);
  })
  .catch(error => {
    showErrorMessage(`Unable to update contact: ${error.response.data.error}`)
  });
  }

  const handleCreateContact = (contact) => {
    ContactsService.create(contact).then(
      (response) => {
        setPersons(persons.concat(response));
        showMessage(`Added ${contact.name}`)
      })
      .catch(error => {
        showErrorMessage(`Unable to create contact: ${error.response.data.error}`)
      });
  }


  const handleDelete = (id) => {
    ContactsService.remove(id).then(() => {
      setPersons(persons.filter(person => person.id !== id))
      showMessage(`Deleted contact`);
    })
    .catch(error => {
      showErrorMessage(`Unable to delete contact.`)
    })
  }

  const filterPersons = () => {
    console.log(persons);
    return persons.filter(person => person.name.includes(filter));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <ErrorNotification message={errorMessage}/>
      <SearchFilter filter={filter} setFilter={setFilter}/>
      <h2>Add new number</h2>
      <ContactForm persons={persons} setPersons={handleCreateContact} updatePersons={handleUpdateContact}/>
      <h2>Numbers</h2>
      <Persons persons={filterPersons()} deletePerson={handleDelete}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
