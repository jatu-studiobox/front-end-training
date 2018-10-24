import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addTodo } from '../actions/todos';

const HeaderContainer = ({addTodo}) => {
    return (
        <Header onSave={addTodo} />
    );
}

const mapDispatchToProps = {
    addTodo
};

export default connect(null, mapDispatchToProps)(HeaderContainer);