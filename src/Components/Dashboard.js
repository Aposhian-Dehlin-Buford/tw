import React, { useEffect } from "react"
import useAuth from "../hooks/useAuth"
import { useSelector } from "react-redux"
import Village from "./Village"
import Villages from "./Villages"
import { setVillage, setVillages, getVillage } from "../redux/villageReducer"
import { connect } from "react-redux"

import useAxios from "../hooks/useAxios"

const Dashboard = ({setVillage, setVillages, getVillage}) => {
  useAuth()
  const { villages } = useAxios("village")
  const { myVillages, otherVillages } = villages
  useEffect(() => {
    if(myVillages && myVillages.length > 0){
      getVillage(myVillages[0].village_id)
    }
}, [myVillages])
  // useEffect(() => {
  //   // setVillages(villages)
  //   if (myVillages && myVillages.length > 0) {
  //     setVillage(myVillages[0])
  //   }
  // }, [myVillages])
  // console.log({ village_id })
  return (
    <div>
      <div>Dashboard</div>
      <Village />
      <Villages myVillages={myVillages} />
    </div>
  )
}

export default connect(null, { setVillage, setVillages, getVillage })(Dashboard)
