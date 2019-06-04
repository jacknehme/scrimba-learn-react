import React from 'react';

function TodoItem(props) {
    const todo = props.item;
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                onChange={(event) => props.handleChange(todo.id)}
                checked={todo.completed}  /> 
            <p>{todo.text}</p>
        </div>
    );
}

export default TodoItem;