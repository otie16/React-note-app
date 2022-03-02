import React, { useState, useEffect } from 'react';
import './TodoList.css';
import CreateTask from '../modals/createTask'
import CardList from './CardList'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    // console.log(taskList);

    //Fetching Items from local storage
    useEffect(() => {
        let arr = localStorage.getItem("taskList")

        //to update the tasklist if an item exist in local storage
        if (arr) {
            //Coverting the item from json string back to an array object 
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }

    }, []);

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem('taskList', JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    const toggle = () => {
        setModal(!modal)
    }

    //Saving the created task to an array
    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);

        //Storing in local storage and converting array object to string
        localStorage.setItem('taskList', JSON.stringify(tempList));

        setTaskList(taskList);
        setModal(false);
    }

    return <>
        <div className="header text-center">
            <h3>Todo List</h3>
            <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Task</button>
        </div>
        <div className='task-container'>
            {taskList.map((task, index) => <CardList taskObj={task} index={index} deleteTask={deleteTask}/>)}
        </div>
        {/* passing props */}
        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
};

export default TodoList;
