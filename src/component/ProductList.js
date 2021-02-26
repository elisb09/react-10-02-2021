import React, { Component } from 'react';
import ProductItem from './ProductItem';
import Cart from './Cart'

class ProductList extends Component {

    state = {
        productList: [
            { id: 12, title: "Hasan2", description: "It is a good product1", price: 120, count: 1 },
            { id: 26, title: "Asan2", description: "It is a good product2", price: 130, count: 1 },
            { id: 47, title: "Lasan2", description: "It is a good product3", price: 160, count: 1 },
            { id: 50, title: "Masan2", description: "It is a good product4", price: 320, count: 1 },
            { id: 90, title: "Lasan2", description: "It is a good product3", price: 620, count: 1 },
        ],
        cart: [],
        counts: []
    }

    consoleTitle = (title) => () => {
        console.log(title);
    }

    addToCart = (id) => () => {

        const exist = this.state.cart.find((item) => item.id === id)
        if (exist === undefined) {
            this.setState((state) => {
                const item = state.productList.find((item) => item.id === id)
                return {
                    cart: [...state.cart, { ...item }]
                }
            })
            console.log(this.state.cart);
        }
    }

    addToCount = (id) => () => {

        const exist = this.state.count.find((item) => item.id === id)
        // if (exist === undefined) {
            this.setState((state) => {
                const item = state.productList.find((item) => item.id === id)
                return {
                    counts: [...state.counts, { ...item }]
                }
            })
        // }
    }

    render() {
        const totalCart = this.state.cart.reduce((ans, item) => item.price + ans, 0)
        return (
            <div>
                <ul className='row product-list'>
                    {this.state.productList.map(item => (
                        <li key={item.id} className="col-3">
                            <ProductItem
                                item={item}
                                consoleTitle={this.consoleTitle(item.title)}
                                addToCart={this.addToCart(item.id)}
                            />
                        </li>))}
                </ul>
                <Cart totalCart={totalCart} cart={this.state.cart} />
            </div>
        );
    }
};

export default ProductList;