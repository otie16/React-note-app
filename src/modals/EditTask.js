import React, {useState, useEffect} from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function EditTask({ modal, toggle, updateNote, notes}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {
        //extracting name and value from e.target
        const { name, value } = e.target;


        if (name === 'title') {
            setTitle(value);
        } else {
            setDescription(value);
        }

    }

    useEffect(() => {
        setTitle(notes.title);
        setDescription(notes.description);
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {};
        tempObj['title'] = title;
        tempObj['description'] = description;
        // save(taskObj);
        updateNote(tempObj);
    }
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            rows="5"
                            className="form-control"
                            name="description"
                            value={description}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>
                    Update 
                </Button>
                <Button color="danger">
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default EditTask;
