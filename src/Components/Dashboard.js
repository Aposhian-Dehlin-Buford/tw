import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useSelector } from "react-redux"
import { Route } from "react-router-dom"
import Village from "./Village"
import Villages from "./Villages"
import OtherVillage from "./OtherVillage"
import OtherVillages from "./OtherVillages"
import Map from "./Map"
import { setSocket } from "../redux/socketReducer"
import {
  setVillage,
  getVillages,
  getOtherVillages,
} from "../redux/villageReducer"
import { connect } from "react-redux"
import io from "socket.io-client"

const Dashboard = ({
  setVillage,
  getVillages,
  getOtherVillages,
  setSocket,
}) => {
  const { villages } = useSelector(({ villageReducer }) => villageReducer)
  const { push } = useHistory()
  let socket = io.connect("http://localhost:3333")
  useAuth()
  useEffect(() => {
    setSocket(socket)
    getVillages()
    getOtherVillages()
    return () => socket.disconnect()
  }, [])
  useEffect(() => {
    if (villages && villages.length > 0) {
      setVillage(villages[0])
      push("/dashboard/village")
    }
  }, [villages])
  return (
    <div>
      <div>Dashboard</div>
      <Map />
      <Villages />
      <Route path = '/dashboard/othervillage/:village_id' component={OtherVillage} />
      {/* <OtherVillage exact path /> */}
      {/* <Route
        exact
        path="/dashboard/othervillage/:village_id"
        render={(props) => <OtherVillage {...props} socket={socket} />}
      /> */}
      <Route exact path="/dashboard/village" Village component={Village} />
    </div>
  )
}

export default connect(null, {
  setSocket,
  setVillage,
  getVillages,
  getOtherVillages,
})(Dashboard)
