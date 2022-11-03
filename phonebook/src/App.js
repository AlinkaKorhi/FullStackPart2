import { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'

function App() {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  function getPersonFromServer(){
    const eventHandler = response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    }

    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  }

  useEffect(getPersonFromServer,[])

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
      <Filter filter={filter} handleClick={(event) => handleFilterChange(event)}/> 

      <h2>add a new</h2>
      <PersonForm 
        newName={newName} 
        handleNameChange={(event) => handleNameChange(event)}
        newNumber={newNumber}
        handleNumberChange={(event) => handleNumberChange(event)}
        addPerson={(event) => addPerson(event)}
        />
      
      <h2>Numbers</h2>
      <Persons persons={persons.filter(personF => personF.name.includes(filter))} onChange={handleFilterChange}/>      
    </div>
  )
}


export default App;
