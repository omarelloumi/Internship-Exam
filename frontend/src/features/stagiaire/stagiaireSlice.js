import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import stagiaireService from './stagiaireService';

const initialState = {
    stagiaires : [],
    stagiaire :{}
}

export const getStagiaires = createAsyncThunk('stagiaire/getStagiaires',async () => {
    const response = await stagiaireService.getStagiaires();
    return response
})

export const getStagiaireById = createAsyncThunk('stagiaire/getStagiaireById', async (id) =>{
    const response = await stagiaireService.getStagiaireById(id);
    return response
})

export const addStagiaire = createAsyncThunk('stagiaire/addStagiaire', async (stagiaire) => {
    const response = await stagiaireService.addStagiaire(stagiaire)
    return response
})

export const updateStagiaire = createAsyncThunk('stagiaire/updateStagiaire', async(stagiaire) =>{
    const {_id} = stagiaire;
    const response = await stagiaireService.updateStagiaire(_id,stagiaire)
    return response
})

export const deleteStagiaire = createAsyncThunk('stagiaire/deleteStagiaire',async(id) => {
    const response = await stagiaireService.deleteStagiaire(id)
    return response
})

export const stagiaireSlice = createSlice({
    name : 'stagiaire',
    initialState,
    reducers :{
        reset : (state)=> initialState,
        
    },
    extraReducers : (builder) => {
        builder
            .addCase(getStagiaires.fulfilled, (state,action) => {
                state.stagiaires = action.payload
            })
            .addCase(getStagiaireById.fulfilled, (state,action)=>{
                state.stagiaire = action.payload
            })
            .addCase(addStagiaire.fulfilled, (state,action)=>{
                state.stagiaires.push(action.payload)
            })
            .addCase(updateStagiaire.fulfilled, (state,action)=>{
                const index = state.stagiaires.findIndex(stagiaire => stagiaire._id === action.payload._id)
                state.stagiaires[index] = action.payload
            })
            .addCase(deleteStagiaire.fulfilled, (state,action)=>{
                state.stagiaires = state.stagiaires.filter((stagiaire) => stagiaire._id !== action.payload._id)
            })
    }
})


export const { reset } = stagiaireSlice.actions
export default stagiaireSlice.reducer