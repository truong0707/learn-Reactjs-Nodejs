import React, { useRef } from 'react';
import { useReducer } from 'react';

import reducer, { initState } from './reducer';
import { addJob, setJob, deleteJob} from './actions'




export default function Todo() {
    const [state, dispatch] = useReducer(reducer, initState);

    // cú pháp CS6 detructuring
    const { job, jobs } = state

    const inputRef = useRef()

    const handleAddJobs = () => {
        dispatch(addJob(job))
        dispatch(setJob('')) // clear

        // tự focus
        inputRef.current.focus()
    }



    return (
        <div style={{ padding: '0 20px' }}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter todo..'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleAddJobs}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    );
}
