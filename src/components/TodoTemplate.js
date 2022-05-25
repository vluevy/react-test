import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoTemplate = () => {
  return(
      <div className='template'>
        <div className='title'>
          To Do List
        </div>
        <TodoInput/>
        <TodoList/>
      </div>
  );
};

export default TodoTemplate;