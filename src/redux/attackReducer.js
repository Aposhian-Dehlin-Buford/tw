import axios from "axios"
import actionTypes from "./actionTypes"
const { SEND_ATTACK, GET_ATTACKS, SET_ATTACKS, FULFILLED } = actionTypes

const initialState = {
  attacks: [],
}

export function getAttacks() {
  const attacks = axios
    .get("/api/attacks")
    .then((results) => results.data)
    .catch((err) => console.log(err))
  return {
    type: GET_ATTACKS,
    payload: attacks,
  }
}

export function setAttacks(attacks) {
  return {
    type: SET_ATTACKS,
    payload: attacks,
  }
}

export function sendAttack(units) {
  const attacks = axios
    .post("/api/attacks", { units })
    .then((results) => results.data)
    .catch((err) => console.log(err))
  return {
    type: SEND_ATTACK,
    payload: attacks,
  }
}

export default function attackReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SEND_ATTACK + FULFILLED:
      return { ...state, attacks: payload }
    case GET_ATTACKS + FULFILLED:
      return { ...state, attacks: payload }
    case SET_ATTACKS + FULFILLED:
      return { ...state, attacks: payload }
    default:
      return state
  }
}
