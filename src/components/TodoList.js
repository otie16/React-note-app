import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import CardList from './CardList';
import './TodoList.css';


const TodoList = () => {
    //creating a state to set the modal state to either true or false
    const [modal, setModal] = useState(false);
    const [noteList, setNoteList] = useState([]);

    //Changing modal state when toggle function is called
    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = noteList;
        tempList.push(taskObj);
        localStorage.setItem('noteList', JSON.stringify(tempList));
        setNoteList(noteList);
        setModal(false)
    }

    useEffect(() => {
        let arr = localStorage.getItem('noteList')

        if (arr) {
            let parsedItem = JSON.parse(arr);
            setNoteList(parsedItem);
        }
    }, []);

    const deleteNote = (index) => {
        let tempList = noteList;
        tempList.splice(index, 1);
        localStorage.setItem('noteList', JSON.stringify(tempList));
        setNoteList(tempList);
        window.location.reload();
    }

    const updateListArray = (notes, index) => {
        let tempList = noteList;
        tempList[index] = notes
        localStorage.setItem('noteList', JSON.stringify(tempList));
        setNoteList(tempList);
        window.location.reload();
    }

    return (
        <>
            <div className="header text-center">
                <h3>Note App</h3>
                <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>Create Note</button>
            </div>
            <div className="task-container">
                {
                    noteList.map((note, index) => <CardList index={index} notes={note} deleteNote={deleteNote} updateListArray={updateListArray}/>)
                }
            </div>
            <CreateTask modal={modal} toggle={toggle} save={saveTask} />
        </>
    )
};

export default TodoList;
