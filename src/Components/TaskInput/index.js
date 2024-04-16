import React, { useEffect, useState } from 'react';
import './style.css'

const TaskInput = (props) => {
    const { handleAddTodo }  = props;
    const [inputTask, setInputTask] = useState({
        text: "",
        completed: false
    });


    const handleTaskInput = (event) => {
        const value = event.target.value;
        setInputTask({...inputTask, text: value});
    }
    
    return (
        <div className='input-container'>
            <input placeholder='Add a task ...' value={inputTask.text} onChange={(e) => handleTaskInput(e)}/>
            <button onClick={() => { handleAddTodo(inputTask); setInputTask({...inputTask, text: ""})}}>Add</button>
        </div>
    )
}

export default TaskInput