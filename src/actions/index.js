const ADD_todo = "ADD_todo";
export const addtodo = (message )=> ({
    type: ADD_todo,
    message,
    id: Math.random(),
});

const DELETE_todo = "DELETE_todo";
export const deletetodo = (id)=> ({
    type: DELETE_todo,
    id,
});

