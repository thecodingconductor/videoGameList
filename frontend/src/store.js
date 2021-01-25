import {configureStore} from '@reduxjs/toolkit';

import gamesReducer from './slices/gameSlice';

export default configureStore({
    reducer: {
        games: gamesReducer
    }
})