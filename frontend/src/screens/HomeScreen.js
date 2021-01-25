import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import {gameStateInit, getGames} from '../slices/gameSlice';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const gameState = useSelector(state => state.games);
    

    
    

    useEffect(() => {
        dispatch(getGames())
        console.log(gameState);
        
    }, [dispatch, gameState])


    return (
        <div>
            {gameState.games.map(game => (
                <div key={game._id}>
                    <p>{game.rank}</p>
                    <p>{game.title}</p>
                    <p>{game.composers}</p>
                    <p>{game.system}</p>
                    <p>{game.year}</p>
                </div>
            ))}
        </div>
    )
}

export default HomeScreen
