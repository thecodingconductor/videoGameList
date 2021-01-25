import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import SortByDate from './components/SortByDate';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <SortByDate />
        <Container fluid>
          <Route exact path='/' component={HomeScreen}/>
        </Container>
      </main>
    </Router>
    
  );
}

export default App;
