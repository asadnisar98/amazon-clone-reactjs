import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
import { getBasketTotal } from './reducer'

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 

            renderText={(value) => (
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                </p>
                <small className="subtotal__gif">
                    <input type="checkbox" />This order contains a gift
                </small>
                </>
            )}

            value={getBasketTotal(basket)}
            decimalScale={2}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
