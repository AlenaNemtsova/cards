import './Card.scss';
import AddToCartButton from './AddToCartButton.jsx';
import AddToCartForm from './AddToCartForm.jsx';


function Card(props) {
    return (
        <div className={"card "+(props.isSelected ? "selected":"")}>
            <div className="card-body">
                <img src={props.imgLink} alt={props.title}/>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <span className="card-price">${props.price}</span>
                {props.addedToCart
                        ? <AddToCartForm addedToCart={props.addedToCart} />
                        : <AddToCartButton />
                    }
            </div>
            
        </div>
    );
}

export default Card;