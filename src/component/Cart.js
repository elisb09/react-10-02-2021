import React from 'react';

const Cart = (props) => {
    return (
        <section>
            <h2>Cart</h2>
            <ul>
                {props.cart.map(item => {
                    return (
                        <li key={item.id}>
                            {item.title} - {item.count} - {item.price} kgz
                            <button>+</button>
                            <button>-</button>
                        </li>
                    )
                })}
            </ul>
            <p>Total: {props.totalCart}</p>
        </section>
    );
};

export default Cart;