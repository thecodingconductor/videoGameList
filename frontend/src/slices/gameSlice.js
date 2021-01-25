import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    games: [],
    status: 'idle'
}

export const getGames = createAsyncThunk('games/getGames', async() => {
    const response = await axios.get('/api/games');
    // console.log(response.data);
    return response.data;
})


const gameSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        gamesAdded: (state, action) => {
            state.games = [action.payload]
        }
    },
    extraReducers: {
        [getGames.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getGames.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            state.games = state.games.concat(action.payload);
        }
    }
})

export const {gamesAdded} = gameSlice.actions;

export default gameSlice.reducer

export const gameStateInit = (state) => state.games;