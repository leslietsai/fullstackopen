import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistic = props => (
  <>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  </>
)

const Statistics = (props) => {
    if (!(props.good || props.neutral || props.bad)) {
       return (
        <div>
           <h1>statistics</h1>
           <p>No feedback given</p>
        </div>
       )
    }
    const total = props.good + props.bad + props.neutral;
    const average = total/3;
    const avg_score = (props.good - props.bad)/total * 100;

    return (
     <div>
      <h1>statistics</h1>
      <table>
      <Statistic value={props.good} text="good"/>
      <Statistic value={props.neutral} text="neutral"/>
      <Statistic value={props.bad} text="bad"/>
      <Statistic value={total} text="total"/>
      <Statistic value={average} text="average"/>
      <Statistic value={avg_score + "%"} text="positive"/>
      </table>
     </div>
    )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const setToValue = (handle, newValue) => () => {
      handle(newValue);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToValue(setGood, good+1)} text="Good"/>
      <Button handleClick={setToValue(setNeutral, neutral+1)} text="Neutral"/>
      <Button handleClick={setToValue(setBad, bad+1)} text="Bad" /> 
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)