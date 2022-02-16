import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket }] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h1>Your shopping basket is empty</h1>
            <p>
              You have no items in your baskeet. To buy one go to homepage and
              click "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="checkout__title">Your shopping basket</h1>
          </div>
        )}

        {basket?.map((item) => (
          <CheckoutProduct
            item={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>

            <div className="checkout__right">
                {basket?.length > 0 ? (
                    <Subtotal />
                ) : (
                    <div></div>
                )}
                

            </div>

    </div>
  )
}

export default Checkout
