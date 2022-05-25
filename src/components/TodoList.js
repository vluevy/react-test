import React from "react";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state?.todos);
  //const todos = useSelector((state) => store.getState().todos);
  //console.log(todos);

  return(
      <div>
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        ))}
      </div>
  );
};

export default TodoList;