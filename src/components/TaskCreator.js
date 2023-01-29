import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
    const [newTastName, setNewTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTastName);
        setNewTaskName('');
    }

    return (
        <form onSubmit={handleSubmit} className='my-2 row'>
            <div className="col-9">
                <input
                    type='text'
                    placeholder='Enter a new text'
                    value={newTastName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    className='form-control'
                />
            </div>
            <div className="col-3">
                <button className="btn btn-primary btn-sm">Save Task</button>
            </div>
        </form>
    )
}