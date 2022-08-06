import axios from 'axios'

const API= '/api/stagiaires/'

const getStagiaires = async () => {
    const response = await axios.get(API)
    return response.data
}

const getStagiaireById = async(id) => {
    const response = await axios.get(API+id)
    return response.data
}

const addStagiaire = async (stagiaire) => {
    const response = await axios.post(API,stagiaire)
    return response.data
}

const updateStagiaire = async (id , stagiaire) => {
    const response = await axios.put(API+id,stagiaire)
    return response.data
}

const deleteStagiaire = async (id) =>{
    const response = await axios.delete(API+id)
    return response.data
}

const stagiaireService = {
    getStagiaires,
    getStagiaireById,
    addStagiaire,
    updateStagiaire,
    deleteStagiaire
}

export default stagiaireService

