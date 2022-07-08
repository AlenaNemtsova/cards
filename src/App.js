import React from 'react';
import './App.css';
import CardList from './components/CardList';
import Button from './components/Button';
import LogIn from './components/LogIn'


const shoes = [
  {
  id: "1",
  title: "Зимние ботинки",
  price: 99,
  description: "Такие только у нас",
  imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oUWAaHxvjq-XOZPRpgCcsV6kjXjVkBfu0A&usqp=CAU",
  addedToCart: 1,
},

{
  id: "2",
  title: "Пляжные тапки",
  price: 23,
  description: "Надеюсь, пригодятся",
  imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9sEN8ILRx19HsrWVD3VRe2AV7nud1BaMuw&usqp=CAU",
  isSelected: true, //выделенная карточка
},

{
  id: "3",
  title: "Праздничные туфли",
  price: 85,
  description: "Теперь и в черном цвете",
  imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3um-PWxYFmKlYLvP3ARDBaXly71vnwh-IjQ&usqp=CAU",
  isSelected: false, //невыделенная карточка
},

]

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <CardList shoes={shoes}/>
      </div>
      <Button />
      <LogIn />
      
    </React.Fragment>
  );
}

export default App;
