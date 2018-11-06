import { connect } from 'react-redux';
import Header from '../components/Header';
import { getCartTotalQuantity } from '../reducers';

const mapStateToProps = state => ({
    cart: state.cart,
    totalQuantity: getCartTotalQuantity(state.cart)
});

export default connect(mapStateToProps)(Header);