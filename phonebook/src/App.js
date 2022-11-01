import { useState } from 'react'
import Number from './Number'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  function validatePersonName(name){
    let result = true
    persons.forEach(elem => {
      if (elem.name == name)
      result = false
    })
    return result
  }

  function addPerson(event) {
    event.preventDefault()

    if (validatePersonName(newName)){
      const newNameObj = {
        name : newName
      }
      setPersons(persons.concat(newNameObj))
    }
    else{
      alert(`${newName} is already added to phonebook`);
    }
    
    setNewName('')
  }

  function handleNameChange(event) {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <Number key={i} name={person.name} />
        )}
      </ul>
    </div>
  )
}


export default App;
