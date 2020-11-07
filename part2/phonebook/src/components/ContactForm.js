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
        const person = props.persons.filter(person => person.name === newName)
        if (person.length !== 0) {
          const result = window.confirm(`${newName} is already added to the phonebook, update their number?`);
          if (result) {
            props.updatePersons(person[0].id, {...person[0], number: newNumber});
          }
        } else {
          const nameObject = {name: newName, number: newNumber }
          props.setPersons(nameObject);  
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
