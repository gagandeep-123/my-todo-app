import React from "react";
import './style.css';
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskList = (props) => {
    const { todos, handleTodoDelete, toggleTodo} = props;
    return (
        <div className="list-container">
            {
                todos.map((ele, index) => {
                    return (
                        <div className="todo-item">
                                <label>{ele.text}</label>
                            <button onClick={() => handleTodoDelete(index)}>
                                <RiDeleteBin6Line />
                            </button>

                        </div>
                    )
                 })
            }
        </div>
    )
}

export default TaskList;