import axios from "axios"
import actionTypes from "./actionTypes"
const {
  SET_VILLAGE,
  SET_VILLAGES,
  GET_VILLAGE,
  GET_VILLAGES,
  GET_OTHER_VILLAGES,
  PENDING,
  FULFILLED,
  REJECTED,
} = actionTypes

const initialState = {
  village: {
    village_id: "",
    village_name: "",
    x_coord: null,
    y_coord: null,
  },

  villages: [],
  otherVillages: [],
  loading: false,
}

// export function getVillage(village_id) {
//   const village = axios
//     .get(`/api/village/${village_id}`)
//     .then((results) => results.data)
//     .catch((err) => console.log(err))
//   return {
//     type: GET_VILLAGE,
//     payload: village,
//   }
// }

export function getVillages() {
  const villages = axios
    .get("/api/villages")
    .then((results) => results.data)
    .catch((err) => console.log(err))
  return {
    type: GET_VILLAGES,
    payload: villages,
  }
}

export function getOtherVillages() {
  const otherVillages = axios
    .get("/api/villages/other")
    .then((results) => results.data)
    .catch((err) => console.log(err))
  return {
    type: GET_OTHER_VILLAGES,
    payload: otherVillages,
  }
}

export function setVillage(payload) {
  return { type: SET_VILLAGE, payload }
}

export function setVillages(payload) {
  return { type: SET_VILLAGES, payload }
}

export default function villageReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_VILLAGE + FULFILLED:
      return { ...state, village: payload }
    case GET_VILLAGES + FULFILLED:
      return { ...state, villages: payload }
    case GET_OTHER_VILLAGES + FULFILLED:
      return { ...state, otherVillages: payload }

    case SET_VILLAGE:
      return { ...state, village: payload }
    case SET_VILLAGES:
      return { ...state, villages: payload }
    default:
      return state
  }
}
