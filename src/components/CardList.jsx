import React from 'react'
import Card from './Card';

class CardList extends React.Component {
    render() {
        const { shoes } = this.props;

        return (
            <React.Fragment>
                {/* {shoes.map((item, index) => {
                    return (
                        <Card key={index} {...item} /> //добавляем key; используем спред ... потому что аттрибуты <Card> совпадают с ключами объекта, т. е. title={item.title} и т. д., значит можем записать просто {...item}
                    )
                }
                )} */}

                {shoes.filter((item) => {
                    return item.price < 30;
                }).map((item) => {
                    return (
                        <Card {...item} />
                    )
                })
                }

            </React.Fragment>
        );
    }
}

export default CardList;