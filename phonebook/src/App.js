import { useState } from 'react'
import Number from './Number'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

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
        number : newNumber,
        id: persons.length+1
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
  function handleFilterChange(event) {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with:  
          <input value={filter} onChange={handleFilterChange}/>
        </div>
      </form>
      <h2>add a new</h2>
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
        {persons.filter(personF => personF.name.includes(filter)).map(person => 
          <Number key={person.id} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}


export default App;
