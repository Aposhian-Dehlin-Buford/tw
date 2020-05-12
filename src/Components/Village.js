import React from "react"
import { useSelector } from "react-redux"

const Village = () => {
  const {village_id, village_name, units, buildings} = useSelector(({ villageReducer }) => villageReducer.village)
  return (
    <div>
      <div>Village:</div>
      {village_id && <div>
        <h1>Name: {village_name}</h1>
        <h2>Buildings:</h2>
        {buildings && buildings.map(({building_id, name}) => (
          <div key ={building_id}>{name}</div>
        ))}
        <h2>Units:</h2>
        {units && units.map(({unit_id, name, quantity}) => (
          <div key={unit_id}>{name}: {quantity}</div>
        ))}
        </div>}
    </div>
  )
}
export default Village