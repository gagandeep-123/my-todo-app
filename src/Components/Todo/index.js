import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from '../../Redux/action';
import React, { useEffect, useState } from "react";
import './style.css';
import Header from "../Header";

const Todo = () => {
    const dispatch = useDispatch();
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (inputTask) => {
        dispatch(addTodo(inputTask));
        setTodos([...todos, inputTask]);
    }

    const handleTodoDelete = (index) => {
        dispatch(deleteTodo(index));
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }


    useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('myTodoData'));
    if (storedData) setTodos(storedData);
    },[])

    useEffect(() => {
        localStorage.setItem('myTodoData', JSON.stringify(todos));
    }, [todos])
    
    return (
        <div className="myTodo-app">
            <div className="todo-container">
                <Header/>
                <TaskInput handleAddTodo={handleAddTodo} />
                <TaskList todos={todos} handleTodoDelete={handleTodoDelete} />
            </div>
            <div className="todo-image">
                <img src='/todoImage.png'></img>
            </div>
        </div>

    )
}

export default Todo;