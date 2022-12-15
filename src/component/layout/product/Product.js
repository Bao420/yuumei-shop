import AOS from 'aos';
import 'aos/dist/aos.css';
//--------------------------------

import React from 'react';
import lists from '../../../store/productData';
import Context from '../../../store/Context';


function ProductPage(props) {

    return (
        <div>
            <Context.Consumer>
                {
                    Context => (
                        <div className="menu" id="menu">
                            <div className="heading">
                                <span></span>
                                <h3>Our Picture</h3>
                            </div>

                            <div className="box-container">
                                {
                                    Context.products.map(product => (
                                        <div key={product.id} className="box" data-aos="fade-up" data-aos-delay="200">
                                            <img src={product.img} alt=""></img>
                                            <div className="content">
                                                <h3>{product.title}</h3>
                                                <div className="price">$ {product.price}</div>
                                                <button className="btn"
                                                    onClick={Context.addProductToCart.bind(this, product)}

                                                >
                                                    add to cart
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </Context.Consumer>
        </div>
    )
}



AOS.init({
    duration: 500,
});

export default ProductPage;

{/* <>
    <div className="menu" id="menu">
        <div className="heading">
            <span></span>
            <h3>Our Picture</h3>
        </div>
        <div className="box-container">
            {
                lists.map((list, index) => {
                    return (
                        <div key={index} className="box" data-aos="fade-up" data-aos-delay="200">
                            <img src={list.img} alt=""></img>
                            <div className="content">
                                <h3>{list.title}</h3>
                                <div className="price">{list.price}</div>
                                <button className="btn"
                                >
                                    add to cart
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
</> */}
