const initialState = {
    data : [],
};

const todos = (state = initialState , action ) => {

    <div className= "todo"/>
    switch (action.type){
        case "ADD_todo":
           return {
               ...state,
               data: [
                   ...state.data,
                   {
                    message : action.message,
                    id: action.id,
                   },
               ],
           };
        case "DELETE_todo":
           const todos = state.data.filter((todo) => todo.id !== action.id);
           return {
               ...state,
               data: todos,
           };
        default :
           return state;

    }
};

export default todos;