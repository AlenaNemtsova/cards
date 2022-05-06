import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Button from './components/Button';
import LogIn from './components/LogIn'



function App() {
  return (
    <React.Fragment>
      <div className="App">
        <CardList></CardList>
      </div>
      <Button></Button>
      <LogIn></LogIn>
      
    </React.Fragment>
  );
}

export default App;
