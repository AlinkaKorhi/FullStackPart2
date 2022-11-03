import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

function getAll(){
    return axios.get(baseUrl)
}

function createNew(newObj){
    return axios.post(baseUrl, newObj)
}

function deleteObj(objId){
    return axios.delete(baseUrl+'/'+objId, objId)
}

export default {getAll, createNew, deleteObj}