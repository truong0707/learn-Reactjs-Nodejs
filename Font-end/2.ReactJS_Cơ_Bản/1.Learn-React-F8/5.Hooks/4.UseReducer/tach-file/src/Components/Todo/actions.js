import { SET_JOB, ADD_JOB, DELETE_JOB } from './TypeConstants';

// ba action dưới dang function trả ra 1 cái object
export const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

export const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}


// console.log(setJob('Rua bat'))