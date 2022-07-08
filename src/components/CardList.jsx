import React from 'react'
import Card from './Card';

class CardList extends React.Component {
    render() {
        const { shoes } = this.props;

        return (
            <React.Fragment>
                {/* {shoes.map((item, id) => {
                    return (
                        <Card key={item.id} {...item} /> //добавляем key; используем спред ... потому что аттрибуты <Card> совпадают с ключами объекта, т. е. title={item.title} и т. д., значит можем записать просто {...item}
                    )
                }
                )} */}

                {/* теперь устанавливаем фильтр - выводим только те карточки, цена которых не превышает заданную (30$) */}

                {/* {shoes.filter((item) => {
                    return item.price < 30;
                }).map((item) => {
                    return (
                        <Card key={item.id} {...item} />
                    )
                })
                }
                 */}
                
                {/* теперь более короткая запись, без return и скобок */}

                {shoes.filter((item) => item.price < 30).map((item) => <Card key={item.id} {...item} />)}

            </React.Fragment>
        );
    }
}

export default CardList;