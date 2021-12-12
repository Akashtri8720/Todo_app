import React from 'react';
import { connect } from 'react-redux';
import { deletetodo } from '../../actions';
import {ImCross} from "react-icons/im";


const List = (props) => {
    return (
        <ul>
           
      
            {props.todos.map((todo,index)=> (
                 <div className = "Todostyle">
                   <li key = {index}>{todo.message}
                   <button className= "del" onClick = {()=> props.dispatch(deletetodo(todo.id))}><ImCross/>
                   </button>
                   </li>
                </div>   
            ))}
            
        </ul>
    );



};

const mapStateToProps = (state) => ({
    todos: state.todos.data,
});

export default connect(mapStateToProps)(List);
