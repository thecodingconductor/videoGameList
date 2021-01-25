import asyncHandler from 'express-async-handler';
import Game from '../models/Game.js'


// @desc    Get games
// @route   GET /api/games
// @access  Public

const getGames = asyncHandler(async (req, res) => {
    const games = await Game.find({})
    res.json(games);
})

export {
    getGames
}