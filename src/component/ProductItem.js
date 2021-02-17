import React from 'react';
import image from '../img/Clock.jpg'

const ProductItem = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src={image} alt="Card cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <button href="#" class="btn btn-primary">Go somewhere</button>
                </div>
        </div>
    );
};

export default ProductItem;