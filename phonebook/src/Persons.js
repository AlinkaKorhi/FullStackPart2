import Number from './Number.js'

function Persons(props){
    return(
        <ul>
        {props.persons.map(person => 
          <Number key={person.id} name={person.name} number={person.number}/>
        )}
      </ul>
    )
}

export default Persons;