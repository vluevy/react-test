import { ADD, CHECK, DELETE } from "./action";

// 실행시 초기 test 데이터
const initialState = {
  todos: [
    {id: 0, content: 'test1', checked: true},
    {id: 1, content: 'test2', checked: false},
    {id: 2, content: 'test3', checked: false}
  ]
};

export const reducer = (state= initialState, action) => {
  switch (action.type){
    case ADD:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };
    case CHECK:
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === action.id ? {...todo, checked : !todo.checked} : todo)
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id)
      };
    default:
      return state;
  }
};
