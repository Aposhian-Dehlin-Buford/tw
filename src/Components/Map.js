import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux"

const Map = () => {
  const { village, villages, otherVillages } = useSelector(
    ({ villageReducer }) => villageReducer
  )
  const [grid, setGrid] = useState([])
  useEffect(() => {

  }, [])
  return <div>Map</div>
}

export default Map
