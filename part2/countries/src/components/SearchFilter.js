import React from 'react'

const SearchFilter = (props) => {

  const handleInputChange = (event) => {
    props.setFilter(event.target.value);
  }
  
  return (
    <div>
      filter: <input value={props.filter} onChange={handleInputChange}/>
    </div>
  )
}

export default SearchFilter