import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap';
import {gameStateInit, getGames} from '../slices/gameSlice';
import Game from '../components/Game';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const gameState = useSelector(state => state.games);
    

    // const obj = [gameState.games];
    // const orderedGames = obj.sort((a,b) => a.year - b.year)
    
   
        
                            

    useEffect(() => {
        
        dispatch(getGames())
        
        // console.log(orderedGames);
        
    }, [dispatch])


    return (
       
        <Container>

            
            {gameState.status === "loading" ? <div>Loading</div> : 

                <Row>
                    {gameState.games.map((game) => (
                                <Col key={game.title} sm={12} md={6} lg={4} xl={3}>
                                    <Game game={game}/>
                                </Col>
                            ))}
                </Row>
               
            }

            
        </Container>
    )
}

export default HomeScreen
