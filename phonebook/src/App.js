import { useState } from 'react'
import Number from './Number'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '00000000'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

    if (newName == ''){
      alert(`Field name must be a filled`);
      return
    }

    if (newNumber == ''){
      alert(`Field number must be a filled`);
      return
    }

    if (validatePersonName(newName)){
      const newNameObj = {
        name : newName,
        number : newNumber
      }
      setPersons(persons.concat(newNameObj))
    }
    else{
      alert(`${newName} is already added to phonebook`);
    }
    
    setNewName('')
    setNewNumber('')
  }

  function handleNameChange(event) {
    setNewName(event.target.value)
  }
  function handleNumberChange(event) {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>number: 
          <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
          <Number key={i} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}


export default App;
