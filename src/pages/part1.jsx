
import { useState } from "react"

const Header = (props) => {

  const [cool, setCool] = useState('')
  const makeItCool = () => setCool('Cool ')
  return (
   <div>
    <h1>{cool}{props.course.name}</h1>
    <button onClick={makeItCool}>Make it cool</button>
   </div>

  )
}

const Part = (props) => {
  return (
    <p>
        {props.name} {props.exercises}
      </p>
  )
}

const Contents = (props) => {

  return (
    <div>
    
    <Part
    name={props.course.parts[0].name}
    exercises={props.course.parts[0].exercises}
    />
    <Part
    name={props.course.parts[1].name}
    exercises={props.course.parts[1].exercises}
    />
    <Part
    name={props.course.parts[2].name}
    exercises={props.course.parts[2].exercises}
    />

    </div>
  )
}

const Total = (props) => {

  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Contents
        course={course}
      />
      <Total
        course={course}
      />

    </div>
  )
}

export default App;