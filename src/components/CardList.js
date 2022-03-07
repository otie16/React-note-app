import React, {useState} from 'react';
import './CardList.css'
import EditTask from '../modals/EditTask'

function CardList({ notes, index, deleteNote, updateListArray }) {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    // console.log(id);
    const colors = [
        {
            primaryColor: "#5d93e1",
            secondaryColor: "#ecf3fc"
        },
        {
            primaryColor: "#f9d288",
            secondaryColor: "#fefaf1"

        },
        {
            primaryColor: "#5dc250",
            secondaryColor: "#f2faf1"

        },
        {
            primaryColor: "#f48687",
            secondaryColor: "#fdf1f1"

        },
        {
            primaryColor: "#b964f7",
            secondaryColor: "#f3f0fd"

        },
    ];

    const handleDelete = () => {
        deleteNote(index);

    }

    const updateNote = (notes) => {
        updateListArray(notes, index)
    }

    return <div>
        <div className="card-wrapper mr-3">
            <div className="card-top" style={{ "backgroundColor": colors[index % 5].primaryColor }}></div>
            <div className="task-holder">

                <span className="card-header" style={{ "backgroundColor": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{notes.title}</span>
                <p>{notes.description}</p>
            </div>
            <div className="btn-grp">
                <i className="far fa-edit mr-3" style={{
                    "color": colors[index % 5].primaryColor, "cursor": "pointer"
                }} onClick={() => setModal(true)}></i>
                <i className="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} onClick={handleDelete}></i>
            </div>
        </div>
        <EditTask modal={modal} toggle={toggle} updateNote={updateNote} notes={notes} />
    </div>;
}

export default CardList;
