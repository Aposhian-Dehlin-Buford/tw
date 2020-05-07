import React, {useState, useEffect} from "react"
import { useSelector } from "react-redux"

const generateGrid = () => {
    let genGrid = []
    for(let y = 0; y < 10; y++){
        genGrid.push([])
        for(let x = 0; x < 10; x++){
            genGrid[y].push({
                x,
                y,
                village: false,
                otherVillage: false,
                village_id: null
            })
        }
    }
    return genGrid
  }

const Map = () => {
  const { village, villages, otherVillages } = useSelector(
    ({ villageReducer }) => villageReducer
  )
  const [grid, setGrid] = useState([])
  useEffect(() => {
      let genGrid = generateGrid()
      for(let i = 0; i < villages.length; i++){
          genGrid[villages[i].y_coord][villages[i].x_coord].village = true
          genGrid[villages[i].y_coord][villages[i].x_coord].village_id = villages[i].village_id
      }
      for(let j = 0; j < otherVillages.length; j++){
          genGrid[otherVillages[j].y_coord][villages[j].x_coord].otherVillage = true
          genGrid[otherVillages[j].y_coord][villages[j].x_coord].village_id = otherVillages[j].village_id
      }
      setGrid(genGrid)
  }, [villages, otherVillages, village])
  return (<div>
      <div>Map</div>
      <pre>{JSON.stringify(grid, null, 2)} </pre>
  </div>)
}

export default Map
