import React from 'react';

function TodoItem(props) {
    const todo = props.todo;
    return (
        <div className="todo-item">
            {/* checked box locked */}
            <input type="checkbox" checked={todo.completed} /> 
            <p>{todo.text}</p>
        </div>
    );
}

export default TodoItem;