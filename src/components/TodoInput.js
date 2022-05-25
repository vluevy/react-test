import React, {useState} from "react";
import {add_todo} from "../store/action";
import {useDispatch, useSelector} from "react-redux";

const TodoInput = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  
  const todos = useSelector((state) => state?.todos);
  const doneTodos = todos.filter(todo => todo.checked);

  const changeInput = (e) => {
    setContent(e.target.value);
    //console.log(content);
  };

  const enterKeyPress = (e) => {
    if(e.key === "Enter"){
      addTodo();
    }
  };

  const addTodo = () => {
    if(content.trim()===""){
      alert("할일을 입력하세요");
    } else {
      //console.log(content);
      dispatch(add_todo(content));
      setContent("");
    }
  };

  return (
      <>
        <div className='todo-input'>
          <input onChange={changeInput} value={content} onKeyDown={enterKeyPress}/>
          <span className='input-button' onClick={addTodo}>＋</span>
        </div>
        <div className='todo-count'>
          <span>완료 {doneTodos.length}개</span>
          <span>전체 {todos.length}개</span>
        </div>
      </>
      );
};

export default TodoInput;