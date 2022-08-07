import axios from 'axios'

const API = '/api/stage/'

const affectStage = async (stage) => {
    const response = await axios.post(API+"affect",stage)
    return response.data
}

const stageService = {
    affectStage
}

export default stageService