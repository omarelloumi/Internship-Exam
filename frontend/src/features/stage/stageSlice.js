import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import stageService from './stageService'

const initialState = {
    stages : []
}

export const affectStage = createAsyncThunk('Stage/affect' , async (stage) => {
    const response = await stageService.affectStage(stage)
    return response
})

export const stageSlice = createSlice({
    name : 'stage',
    initialState,
    reducers : {
        reset : (state)=> initialState,
    },
    extraReducers : (builder) =>{
        builder
            .addCase(affectStage.fulfilled, (state,action) => {
                state.stages.push(action.payload)
            })
    }
})

export const { reset } = stageSlice.actions
export default stageSlice.reducers