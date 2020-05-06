import React, { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import { useSelector } from "react-redux"
import Village from "./Village"
import Villages from "./Villages"
import {
  getVillage,
  getVillages,
  getOtherVillages
} from "../redux/villageReducer"
import { connect } from "react-redux"

const Dashboard = ({ getVillage, getVillages, getOtherVillages }) => {
  useAuth()
  // let { villages } = useAxios("village")
  // const { villages, otherVillages } = villages
  const villages = useSelector(({ villageReducer }) => villageReducer.villages)
  useEffect(() => {
    getVillages()
    getOtherVillages()
  }, [])
  useEffect(() => {
    if (villages && villages.length > 0) {
      getVillage(villages[0].village_id)
    }
  }, [villages])
  return (
    <div>
      <div>Dashboard</div>
      <Village />
      {villages && villages[0] && <Villages myVillages={villages} />}
    </div>
  )
}

export default connect(null, {
  getVillage,
  getVillages,
  getOtherVillages
})(Dashboard)
