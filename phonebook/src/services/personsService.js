import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

function getAll(){
    return axios.get(baseUrl)
}

function createNew(newObj){
    return axios.post(baseUrl, newObj)
}

export default {getAll, createNew}