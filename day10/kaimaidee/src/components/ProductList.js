import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, addCart }) => {
    return (
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} addCart={addCart} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;