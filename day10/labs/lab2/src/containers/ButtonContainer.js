import { connect } from 'react-redux';
import { incrementBy } from '../actions/counter';
import { decrementBy } from '../actions/counter';
import Button from '../components/Button';

const mapDispatchToProps = {
  incrementBy,
  decrementBy
};

export default connect(null, mapDispatchToProps)(Button);
