import React, {useEffect} from 'react';
import {Button, Container} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';

const SortByDate = () => {


    const selectedPosts = useSelector(state => state.games);
    

    return (
        <Container>
            <Button>
                Sort by Date
            </Button>
        </Container>
    )
}

export default SortByDate
