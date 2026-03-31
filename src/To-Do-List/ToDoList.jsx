import React, { useState } from 'react';


function ToDoList() {

    const [tasks, newTasks] = useState(["a", "b", "c"]);
    const [newTask, setNewTask] = useState("");

    //funkcja sluzaca do zauwazania zmian w inpucie np.
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            newTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks=tasks.filter((_,i)=> i!==index);
        newTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
            newTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index <tasks.length -1 ){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
            newTasks(updatedTasks);
        }
    }

    return (<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}></input>
            <button className="add-button" onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>
        </div>

    </div>);
}

export default ToDoList