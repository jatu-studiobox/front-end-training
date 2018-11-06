import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

export default combineReducers({
    products,
    cart
});

const findProductById = (state, id) => state.find(product => product.id === id);

export const getCartTotalQuantity = (state) => Object.keys(state).reduce((acc, productId) => acc + state[productId].quantity, 0);

// return cart object like this
// {
//  items: []
//  totalQuantity: number
//  totalPrice: number
// }
export const getCartProducts = (state) => {
    // first summary each product
    const items = Object.keys(state.cart).map(productId => {
        const product = findProductById(state.products, +productId);
        //console.log(product);
        const quantity = state.cart[productId].quantity;
        return {
            product,
            quantity,
            sumPrice: product.price * quantity
        }
    });
    // return all product and summary result
    return {
        items,
        totalQuantity: getCartTotalQuantity(state.cart),
        totalPrice: items.reduce((acc, item) => acc + item.sumPrice, 0)
    }
}