import React from 'react';
import image from '../img/Clock.jpg'

const ProductItem = (props) => {
    const item = props.item
    return (
        <div className="card mt-5">
            <img className="card-img-top" src={image} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">{item.price} kgz</p>
                    <button onClick={props.addToCart} href="#" className="btn btn-primary"><i className="fa fa-shopping-cart"></i></button>
                </div>
        </div>
    );
};

export default ProductItem;