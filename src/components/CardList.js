import React from 'react';
import './CardList.css'

function CardList({ taskObj, index, deleteTask }) {

    const handleDelete = () => {
        deleteTask(index);
    }

    return <div>
        <div className="card-wrapper mr-3">
            <div className="card-top" style={{ "backgroundColor": "chartreuse" }}></div>
            <div className="task-holder">
                <span className="card-header" style={{ "backgroundColor": "#F2FAF1", "border-radius": "10px" }}>{taskObj.name}</span>
                <p>{taskObj.description}</p>
            </div>
            <div className="btn-grp">
                <i className="far fa-edit btn btn-primary" style={{"cursor": "pointer"}}></i>
                <i className="fas fa-trash-alt btn btn-danger" style={{ "cursor": "pointer" }} onClick={handleDelete}></i>
            </div>

        </div>
    </div>;
}

export default CardList;
