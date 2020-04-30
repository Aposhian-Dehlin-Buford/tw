import {SET_USER} from './actionTypes'

const initialState = {
    user: {}
}

export function setUser(payload){
    return {type: SET_USER, payload}
}

export default function authReducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case SET_USER:
            return {...state, user: payload}
        default:
            return state
    }
}