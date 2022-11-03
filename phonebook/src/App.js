import { useEffect, useState } from 'react'
import personsService from './services/personsService.js'
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
      setPersons(response.data)
    }

    const promise = personsService.getAll()
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
        id: persons[persons.length-1].id + 1
      }

      personsService.createNew(newNameObj)
        .catch(err => {alert(`${newName} cant added to server`)})

      setPersons(persons.concat(newNameObj))
    }
    else{
      let confirmresult = window.confirm(`${newName} is already added to phonebook, replace the old number to a new one?`);
      
      if (confirmresult){
        let updateObj = persons.find(elem => elem.name == newName);
        updateObj.number = newNumber;
          
        personsService.updateObj(updateObj.id,updateObj)
          .catch(err => {alert(`${newName} cant updated in server`)})
  
        setPersons(persons.map((elem)=>{
          if (elem.id == updateObj.id) {
            return {name:elem.name, number:newNumber, id:elem.id}
          }
          else{
            return elem
          }
        }))
      }

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
  function handleDeleteNumber(event){
    let personById = persons.find(elem => elem.id == event.target.id)
    if (window.confirm(`Do you really want to delete ${personById.name}?`)) {
      personsService
      .deleteObj(event.target.id)
      .then(response => {
        getPersonFromServer()
      })
    }  
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
      <Persons 
        persons={persons.filter(personF => personF.name.includes(filter))} 
        onChange={handleFilterChange}
        deleteNumberProps={handleDeleteNumber}
      />      
    </div>
  )
}


export default App;
