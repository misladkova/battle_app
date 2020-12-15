import axios from 'axios'
const baseUrl = 'http://localhost:8080/warriors'

const getWarriorsServer = () => {
    return axios.get(baseUrl)
}

const getSpecificWarriorServer = (id) => {
    const url = `${baseUrl}/${id}`
    return axios.get(url)
}

const addWarriorServer = (warrior) => {
    return axios.post(baseUrl, warrior)
}

const updateWarriorServer = (id, updatedWarrior) => {
    const url = `${baseUrl}/${id}`
    return axios.put(url, updatedWarrior)
}

const deleteWarriorServer = (id) => {
    const url = `${baseUrl}/${id}`
    return axios.delete(url)
}

export default {
    getWarriorsServer,
    getSpecificWarriorServer,
    addWarriorServer,
    updateWarriorServer,
    deleteWarriorServer
}


