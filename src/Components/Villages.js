import React from "react"
import {useSelector} from 'react-redux'

const Villages = () => {
  const villages = useSelector(({ villageReducer }) => villageReducer.villages)
  return (
    <div>
      <div>Villages:</div>
      {villages &&
        villages.map(({ village_name, village_id }) => (
          <div key={village_id}>{village_name}</div>
        ))}
    </div>
  )
}
export default Villages
