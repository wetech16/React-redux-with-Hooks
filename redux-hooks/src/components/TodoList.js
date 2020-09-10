import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import {toggleTodoComplete, deleteTodoAction} from '../redux';

export default () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const toggleTodo = (todoId) => dispatch(toggleTodoComplete(todoId));
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={toggleTodo.bind(null, todo.id)}
          />
          <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
          <span
            className="delete-button"
            onClick={deleteTodo.bind(null, todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};
