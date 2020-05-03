import axios from 'axios'
import actionTypes from './actionTypes'
const {SET_VILLAGE, SET_VILLAGES} = actionTypes

const initialState = {
    village: {
        village_id: '',
        village_name: '',
        x_coord: null,
        y_coord: null
    },
    villages: []
}

export function setVillage(payload){
    return {type: SET_VILLAGE, payload}
}

export function setVillages(payload){
    return {type: SET_VILLAGES, payload}
}

export default function villageReducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case SET_VILLAGE:
            return {...state, village: payload}
        case SET_VILLAGES:
            return {...state, villages: payload}
        default:
            return state
    }
}