import { SET_JOB, ADD_JOB, DELETE_JOB } from './TypeConstants';

// 1. Init state
export const initState = {
    job: '',
    jobs: []
}



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
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs

            }
            break
        default:
            throw new Error("Invalid action")
    }

    console.log('NewState: ', newState)
    return newState
}

export default reducer;
