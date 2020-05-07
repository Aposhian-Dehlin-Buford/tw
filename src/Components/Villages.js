import React from "react"
import { useSelector, connect } from "react-redux"
import { getVillage } from "../redux/villageReducer"

const Villages = ({ getVillage }) => {
  const {villages} = useSelector(({ villageReducer }) => villageReducer)
  return (
    <div>
      <div>Villages:</div>
      {villages &&
        villages.map(({ village_name, village_id }) => (
          <div key={village_id} onClick={() => getVillage(village_id)}>
            {village_name}
          </div>
        ))}
    </div>
  )
}

export default connect(null, { getVillage })(Villages)
