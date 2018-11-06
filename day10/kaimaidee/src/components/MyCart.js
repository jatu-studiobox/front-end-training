import React from 'react';

const MyCart = ({ cart }) => {
    return (
        <div style={{ margin: 20 }}>
            <h3>My Cart</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.items.map(item => (
                        <tr key={item.product.id}>
                            <th scope="row">{item.product.id}</th>
                            <td>{item.product.title}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.sumPrice}</td>
                        </tr>
                    ))}
                    <tr>
                        <th scope="row"></th>
                        <td>Total</td>
                        <td></td>
                        <td>{cart.totalQuantity}</td>
                        <td>{cart.totalPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyCart;