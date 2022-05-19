import React from 'react';
import { useReducer } from 'react';

// 1. Init state
const initState = {
    job: '',
    jobs: []
}

// 2. Actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

// ba action dưới dang function trả ra 1 cái object
const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}
// console.log(setJob('Rua bat'))


// 3. Reducer
const reducer = (state, action) => {
    console.log("Action", action)
    console.log("Prev state: ", state)

    let newState

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        default:
            throw new Error("Invalid action")
    }

    console.log('NewState: ', newState)
    return newState
}

export default function TodoWithReducer() {
    const [state, dispatch] = useReducer(reducer, initState);

    // cú pháp CS6 detructuring
    const { job, jobs } = state



    return (
        <div style={{ padding: '0 20px' }}>
            <h3>Todo</h3>
            <input
                value={job}
                placeholder='Enter todo..'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job} &times;</li>
                ))}
            </ul>

        </div>
    );
}
