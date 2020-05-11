import React, { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import { useSelector } from "react-redux"
import {Route} from 'react-router-dom'
import OtherVillage from './OtherVillage'
import Village from "./Village"
import Villages from "./Villages"
import OtherVillages from './OtherVillages'
import Map from './Map'
import {
  setVillage,
  getVillages,
  getOtherVillages
} from "../redux/villageReducer"
import { connect } from "react-redux"

const Dashboard = ({ setVillage, getVillages, getOtherVillages }) => {
  const {villages} = useSelector(({ villageReducer }) => villageReducer)
  useAuth()
  useEffect(() => {
    getVillages()
    getOtherVillages()
  }, [])
  useEffect(() => {
    if (villages && villages.length > 0) {
      setVillage(villages[0])
    }
  }, [villages])
  return (
    <div>
      <div>Dashboard</div>
      <Route path = '/dashboard/othervillage/:village_id' component = {OtherVillage} />
      <Village />
      <Villages />
      <OtherVillages />
      <Map />
    </div>
  )
}

export default connect(null, {
  setVillage,
  getVillages,
  getOtherVillages
})(Dashboard)
