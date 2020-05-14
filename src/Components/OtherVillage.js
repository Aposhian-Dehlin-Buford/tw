import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { connect } from "react-redux"
import { sendAttack } from "../redux/attackReducer"

const OtherVillage = ({ sendAttack }) => {
  const { village_id } = useParams()
  const { village, otherVillages } = useSelector(({ villageReducer }) => villageReducer)
  const {socket} = useSelector(({socketReducer}) => socketReducer)
  const [otherVillage, setVillage] = useState({ village_name: "" })

  useEffect(() => {
    if (otherVillages && otherVillages.length > 0) {
      setVillage(
        otherVillages.find((village) => +village.village_id === +village_id)
      )
    }
  }, [village_id, otherVillages])
  return (
    <div>
      <div>Other Village:</div>
      <h1>Name: {otherVillage.village_name} </h1>
      <div
        onClick={() =>
          socket.emit("attack", {
            attackingVillage: village,
            defendingVillage: otherVillage,
            units: village.units
          })
        }
      >
        Send Attack
      </div>
    </div>
  )
}

export default connect(null, { sendAttack })(OtherVillage)
