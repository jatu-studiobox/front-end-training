import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { deleteTodo } from '../actions/todos';

const TodoListContainer = ({todos, deleteTodo}) => {
    return (
        <TodoList todos={todos} onDelete={deleteTodo} />
    );
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = {
    deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);