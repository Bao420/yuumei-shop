import React, { useContext } from "react";
import Context from "../../../store/Context"
import Header from "../header/header"

import AOS from 'aos';
import 'aos/dist/aos.css';

function CartPage() {

    const cartContext = useContext(Context);
    const total = cartContext.cart.reduce((total, all) => {
        return total + all.quantity * all.price
    }, 0)

    const payBtn = () => {
        if (total <= 0) {
            alert('No item :(')
        } else {
            alert('Payment Success ^^')
        }
    }


    return (
        <div className="cart_container" >
            <Header />
            <div className="cart_box-pay" data-aos-delay="200">
                {cartContext.cart.length <= 0 && <h1>No Item In The Cart</h1>}
                {cartContext.cart.length > 0 && <h3>Total Price: $ {total}</h3>}
                <button onClick={payBtn} className="cart_pay-btn">Payment</button>
            </div>

            <div className="cart_box-cover" data-aos="fade-up" data-aos-delay="200">
                <div className="cart_box-item">
                    {cartContext.cart.length <= 0 && <h2>No Item In The Cart</h2>}

                    {
                        cartContext.cart.map(cartItem => (
                            <div key={cartItem.id} >
                                <div className="cart_box-item-img">
                                    <img src={cartItem.img} alt="" />
                                    <p>{cartItem.title}
                                        - ${cartItem.price} ({cartItem.quantity})</p>
                                    <button
                                        onClick={cartContext.removeProductFromCart.bind(
                                            this, cartItem.id
                                        )}
                                    >
                                        Remove From Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

AOS.init({
    duration: 500,
});

export default CartPage;