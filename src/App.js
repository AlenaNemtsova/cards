import './App.css';
import CardList from './components/CardList';
import Button from './components/Button';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <CardList></CardList>
      </div>
      <Button></Button>
    </React.Fragment>
  );
}

export default App;
