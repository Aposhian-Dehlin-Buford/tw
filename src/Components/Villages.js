import React from "react"
import {useHistory} from 'react-router-dom'
import { useSelector, connect } from "react-redux"
import { setVillage } from "../redux/villageReducer"

const Villages = ({ setVillage }) => {
  const {villages} = useSelector(({ villageReducer }) => villageReducer)
  const {push} = useHistory()
  return (
    <div>
      <div>Villages:</div>
      {villages &&
        villages.map(({ village_name, village_id }, index) => (
          <div key={village_id} onClick={() => {
            setVillage(villages[index])
            push('/dashboard/village')
            }}>
            {village_name}
          </div>
        ))}
    </div>
  )
}

export default connect(null, { setVillage })(Villages)
