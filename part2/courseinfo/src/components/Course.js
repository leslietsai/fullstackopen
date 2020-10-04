import React from 'react'
const Header = ({ title }) => {
    return (
      <h1>{title}</h1>
    )
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((prev, next) => prev + next.exercises, 0)
    return (
        <div>
            <p><b>Total of {total} exercises</b></p>
        </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part}/>)}
      </div>
    )
  }
  
  export const Course = ({course}) => {
    return (
      <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </div>
    )
  }
  