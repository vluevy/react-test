import React from 'react';
import {check_todo, delete_todo} from "../store/action";
import {useDispatch} from "react-redux";

const TodoItem = ({ todo }) => {
  const {id, content, checked} = todo;
  const dispatch = useDispatch();

  return (
      <div className={`todo-item ${checked===true?'checked':''}`} draggable onClick={() => dispatch(check_todo(id))}>
        <div className={'todo-content'}>
          <span>{content}</span>
        </div>
        <div className={'todo-check'}>
          <span>✔</span>
        </div>
        <div className='todo-delete'>
          <span onClick={() => dispatch(delete_todo(id))}>×</span>
        </div>
      </div>
  );
};

export default TodoItem;