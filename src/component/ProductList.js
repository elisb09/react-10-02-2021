import React from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
    return (
        <ul className='row product-list'>
            <li className="col-3"><ProductItem title="card 1" description="1"/></li>
            <li className="col-3"><ProductItem title="card 2" description="2"/></li>
            <li className="col-3"><ProductItem title="card 3" description="3"/></li>
            <li className="col-3"><ProductItem title="card 4" description="4"/></li>
        </ul>
    );
};

export default ProductList;