import mongoose from 'mongoose';


const gameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    composers: {
        type: String
    },
    system: {
        type: String
    },
    rank: {
        type: Number
    },
    year: {
        type: Number
    }

});

const Game = mongoose.model('Game', gameSchema);

export default Game;