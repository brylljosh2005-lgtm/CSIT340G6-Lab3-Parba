const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} units={props.parts[0].units} />
      <Part name={props.parts[1].name} units={props.parts[1].units} />
      <Part name={props.parts[2].name} units={props.parts[2].units} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units{' '}
      {props.parts[0].units + props.parts[1].units + props.parts[2].units}
    </p>
  )
}

const Footer = (props) => {
  return (
    <p>
      {props.name} - {props.course} - {props.section}
    </p>
  )
}

const App = () => {
  const course = 'CSIT340'
  const parts = [
    {
      name: 'CSIT340',
      units: 3
    },
    {
      name: 'CSIT321',
      units: 3
    },
    {
      name: 'CSIT327',
      units: 3
    }
  ]

  const studentName = 'Bryll Josh Parba'
  const courseCode = 'CSIT340'
  const section = 'G6'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={studentName} course={courseCode} section={section} />
    </div>
  )
}

export default App
