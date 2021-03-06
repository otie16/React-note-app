import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CreateTask({ modal, toggle, save }) {
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

    const handleSave = () => {
        let taskObj = {};
        taskObj['title'] = title;
        taskObj['description'] = description;
        save(taskObj);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input
                            type="text"
                            value={title}
                            name="title"
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            rows="5"
                            value={description}
                            name="description"
                            onChange={handleChange}
                            className="form-control"
                        ></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>
                <Button color="danger" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateTask;
