import React from "react"
import { useSelector } from "react-redux"

const Village = () => {
  const {village_id, village_name} = useSelector(({ villageReducer }) => villageReducer.village)
  return (
    <div>
      <div>Village:</div>
      {village_id && <div>{village_name}</div>}
    </div>
  )
}
export default Village