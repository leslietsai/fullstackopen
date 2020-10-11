import React, { useState } from 'react'

const ContactForm = (props) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const handleInputChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newName || !newNumber) {
          window.alert('Please fill out all the fields');
          return;
        }
        if (props.persons.filter(person => person.name === newName).length !== 0) {
          window.alert(`${newName} is already added to the phonebook`);
        } else {
          const nameObject = {name: newName, number: newNumber }
          props.setPersons(props.persons.concat(nameObject));  
        }
        setNewName('');
        setNewNumber('');
    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default ContactForm;
