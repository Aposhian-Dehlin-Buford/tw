import React from "react"
import {useHistory} from 'react-router-dom'
import { useSelector } from "react-redux"

const OtherVillages = () => {
  const { otherVillages } = useSelector(({ villageReducer }) => villageReducer)
  const {push} = useHistory()
  return (
    <div>
      <div>OtherVillages:</div>
      {otherVillages &&
        otherVillages.map(({ village_name, village_id }) => (
          <div key={village_id}>{village_name}</div>
        ))}
    </div>
  )
}

export default OtherVillages
