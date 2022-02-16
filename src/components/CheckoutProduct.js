import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct(props) {


    var indents = []
    for (var i = 0; i < props.rating; i++) {
      indents.push(
        <p className="indent" key={i}>
          &#9733;
        </p>,
      )
    }

    const [{basket}, dispatch] = useStateValue();

    const RemovefromBasket = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.item,
        })

    }

    return (
        <div key={props.item} className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {props.title}
                </p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>

               
                    <div className="checkoutProduct__rating">{indents}</div>
                    <button onClick={RemovefromBasket}>Remove from basket</button>
            </div>
           

        </div>
    )
}

export default CheckoutProduct
