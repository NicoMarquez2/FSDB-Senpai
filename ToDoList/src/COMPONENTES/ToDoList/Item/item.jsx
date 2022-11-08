import React from "react";
import { useState } from "react";


const Item = ({task, dlt, edt, list}) => {

    const [isCompleted, setStatus] = useState(false)

    const changeStatus = (id) => {
        setStatus(!isCompleted)
        task.status = isCompleted 
    }

    return (
        <li className={`${task.priority}`} key={task.id}>
            <p className={isCompleted + '-task'}>{task.task}</p>
            <div id="actions">
                <i onClick={() => changeStatus(task.id)} class="bi bi-check"></i>
                <i onClick={() => edt(task.id)} className="bi bi-pencil-square"></i>
                <i onClick={() => dlt(task.id)} className="bi bi-trash3"></i>
            </div>
        </li>
    )
}
export default Item;
