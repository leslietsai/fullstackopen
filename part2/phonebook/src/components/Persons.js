import React from 'react'

const Persons = ({persons, deletePerson}) => {
    const handleDeletePerson = (person) => {
      const result = window.confirm(`Delete ${person.name}?`);
      if (result) {
        deletePerson(person.id);
      }
    }
    return (
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name} {person.number}
            <button onClick={() => handleDeletePerson(person)}>Delete</button>
          </p>
        )}
      </div>
    )
}

export default Persons;
