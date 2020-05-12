import actionTypes from './actionTypes'
const {SET_SOCKET} = actionTypes

const initialState = {socket: null}

export function setSocket(socket){
    return {type: SET_SOCKET, payload: socket}
}

export default function socketReducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case SET_SOCKET:
            return {...state, socket: payload}
        default:
            return state
    }
}