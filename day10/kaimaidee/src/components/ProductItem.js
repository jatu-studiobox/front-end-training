import React from 'react';
// Start add FontAwesome to React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// End add FontAwesome to React

const ProductItem = ({ product, addCart }) => {
    return (<div key={product.id} className="col-lg-4 col-md-4 col-sm-4 col-xs-4 p-1">
        <div className="card h-100 d-inline-block" style={{ fontSize: 12, width: 371 }} >
            <div style={{ height: 371 }}>
                <img className="card-img" src={product.img} alt={product.title} style={{ verticalAlign: 'middle', margin: 'auto' }} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {product.title}
                </h5>
                <p className="card-text">Price : {product.price}</p>
                <div>
                    <button className="btn btn-sm btn-primary text-white" onClick={() => addCart(product.id)}><FontAwesomeIcon icon="cart-plus" /> Add Cart</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProductItem;
