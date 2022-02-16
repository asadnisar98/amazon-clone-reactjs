import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product(props) {
  var indents = []
  for (var i = 0; i < props.rating; i++) {
    indents.push(
      <p className="indent" key={i}>
        &#9733;
      </p>,
    )
  }

  const [{}, dispatch] = useStateValue();

  const addTobasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating
      }
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>

        <div className="product__rating">{indents}</div>
        <div className="product__image">
        <img src={props.image} alt="" />
        </div>
        <div className="product__button">
        <button onClick={addTobasket}>Add to basket</button>
        </div>
      </div>
    </div>
  )
}

export default Product
