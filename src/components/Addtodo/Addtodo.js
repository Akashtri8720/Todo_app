import React from 'react';
import { connect } from 'react-redux';
import {addtodo }from "../../actions";
import './list.css';


const Addtodo = (props) => {
    return (
        <form onSubmit = {(event) => {
            event.preventDefault();
            let input = event.target.userInput.value;
            props.dispatch(addtodo(input));
            event.target.userInput.value = "";
        } }>
            <h1> TODO App</h1>
            <input type ='text' placeholder= "Task" name ='userInput'/>
            <button className = "btn1" > Add Task </button>
        </form>
        
    );
};

export default connect()(Addtodo);
