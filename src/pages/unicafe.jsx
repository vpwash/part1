import { useState } from "react";

const Button = (props) => {
  return (
    <button onClick={props.clickHandle}>{props.text}</button>
  )
}

const StatisticLine = (props) => {

  if (props.text === 'Positive') 
  return(
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}%</td>
    </tr>
    
  )
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {

  if (props.all === 0) return (
    <div>No feedback given</div>
  )
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='Good' value={props.good}/>
          <StatisticLine text='Neutral' value={props.neutral}/>
          <StatisticLine text='Bad' value={props.bad}/>
          <StatisticLine text='All' value={props.all}/>
          <StatisticLine text='Average' value={props.average}/>
          <StatisticLine text='Positive' value={props.positivePercent}/>
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)


  const goodFeedback = () => {
    setGood(good + 1)
    setAllClicks(allClicks + 1)
  }
  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    setAllClicks(allClicks + 1)
  }
  const badFeedback = () => {
    setBad(bad + 1)
    setAllClicks(allClicks + 1)
  }
  const positivePercent = good / allClicks * 100
  const average = (good + (bad * -1)) / allClicks

  return (
    <div>
      <h1>Give Your Feedback</h1>
      <Button clickHandle={goodFeedback} text={'Good'}/>
      <Button clickHandle={neutralFeedback} text={'Neutral'}/>
      <Button clickHandle={badFeedback} text={'Bad'}/>
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={allClicks} positivePercent={positivePercent} average={average}/>
    </div>
  )
}

export default App;
