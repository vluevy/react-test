export const ADD = "ADD_TODO";
export const CHECK = "CHECK_TODO";
export const DELETE = "DELETE_TODO";

// test 데이터 이후 id값
let id = 3;

export const add_todo = (content) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      content: content,
      checked: false
    }
  };
};

export const check_todo = (id) => {
  return {
    type: CHECK,
    id
  };
};

export const delete_todo = (id) => {
  return {
    type: DELETE,
    id
  };
};