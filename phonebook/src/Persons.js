import Number from './Number.js'

function Persons(props){
    return(
        <ul>
        {props.persons.map(person => 
          <Number 
            key={person.id} 
            idProp={person.id}
            name={person.name} 
            number={person.number} 
            deleteNumberProps={props.deleteNumberProps}
          />
        )}        
      </ul>
    )
}

export default Persons;