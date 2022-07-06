import React from 'react'
import Card from './Card';

class CardList extends React.Component {
    render() {
        const {shoes} = this.props;

        return (
            <React.Fragment>
            {shoes.map( (item, index) => {
                return (
                    <Card key={index} {...item} /> //добавляем key; используем спред ... потому что аттрибуты <Card> совпадают с ключами объекта, т. е. title={item.title} и т. д., значит можем записать просто {...item}
                )
            }

            )}
            
                {/* все атрибуты Card перенесли в json и отрисовали с помощью map
                    <Card 
                    title="Зимние ботинки"
                    price={99}
                    description="Такие только у нас"
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oUWAaHxvjq-XOZPRpgCcsV6kjXjVkBfu0A&usqp=CAU"
                    addedToCart={1}
                />
                <Card
                    title="Пляжные тапки"
                    price={23}
                    description="Надеюсь, пригодятся"
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9sEN8ILRx19HsrWVD3VRe2AV7nud1BaMuw&usqp=CAU"
                    isSelected={true} //выделенная карточка
                    
                    
                />
                <Card
                    title="Праздничные туфли"
                    price={85}
                    description="Теперь и в черном цвете"
                    imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3um-PWxYFmKlYLvP3ARDBaXly71vnwh-IjQ&usqp=CAU"
                    isSelected={false} //невыделенная карточка
                /> */}
            
            </React.Fragment>
        );
    }
}

export default CardList;