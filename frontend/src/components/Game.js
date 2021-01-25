import React from 'react'
import {Card} from 'react-bootstrap';

const Game = ({ game }) => {
    return (
       <Card className="my-3 p-3 rounded">
           <Card.Body>
               <Card.Title as="div"><h3>{game.title}</h3></Card.Title>
               <Card.Text as="p">
                    {game.year}
                </Card.Text>
                <Card.Text as="p">
                    {game.composers}
                </Card.Text>
                <Card.Text as='p'>
                    {game.system}
                </Card.Text>
           </Card.Body>
       </Card>
    )
}

export default Game
