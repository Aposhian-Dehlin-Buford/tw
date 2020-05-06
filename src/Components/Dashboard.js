import React, { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import { useSelector } from "react-redux"
import Village from "./Village"
import Villages from "./Villages"
import { setVillage, setVillages, getVillage, getVillages } from "../redux/villageReducer"
import { connect } from "react-redux"

import useAxios from "../hooks/useAxios"

const Dashboard = ({setVillage, setVillages, getVillage, getVillages}) => {
  useAuth()
  const { villages } = useAxios("village")
  const { myVillages, otherVillages } = villages
  useEffect(() => {
    if(myVillages && myVillages.length > 0){
      getVillage(myVillages[0].village_id)
    }
}, [myVillages])
  return (
    <div>
      <div>Dashboard</div>
      <Village />
      <Villages myVillages={myVillages} />
    </div>
  )
}

export default connect(null, { setVillage, setVillages, getVillage, getVillages })(Dashboard)
