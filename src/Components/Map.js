import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { setVillage } from "../redux/villageReducer"
import { connect } from "react-redux"

const generateGrid = () => {
  let genGrid = []
  for (let y = 0; y < 10; y++) {
    genGrid.push([])
    for (let x = 0; x < 10; x++) {
      genGrid[y].push({
        x,
        y,
        village: false,
        otherVillage: false,
        village_id: null,
      })
    }
  }
  return genGrid
}

const Map = ({ setVillage }) => {
  const { village, villages, otherVillages } = useSelector(
    ({ villageReducer }) => villageReducer
  )
  const [grid, setGrid] = useState([])
  useEffect(() => {
    let genGrid = generateGrid()
    if (villages && villages.length > 0) {
      for (let i = 0; i < villages.length; i++) {
        genGrid[villages[i].y_coord][villages[i].x_coord].village = true
        genGrid[villages[i].y_coord][villages[i].x_coord].village_id =
          villages[i].village_id
      }
      for (let j = 0; j < otherVillages.length; j++) {
        genGrid[otherVillages[j].y_coord][
          otherVillages[j].x_coord
        ].otherVillage = true
        genGrid[otherVillages[j].y_coord][otherVillages[j].x_coord].village_id =
          otherVillages[j].village_id
      }
    }
    setGrid(genGrid)
  }, [villages, otherVillages, village])
  console.log(otherVillages)
  return (
    <div>
      <div>Map</div>
      <div
        style={{
          height: 250,
          width: 250,
          backgroundColor: "black",
          color: "white",
          display: "grid",
          cursor: "pointer",
          gridTemplateRows: `repeat(10, 1fr)`,
          gridTemplateColumns: `repeat(10, 1fr)`,
          gridColumnGap: 0,
          gridRowGap: 0,
        }}
      >
        {grid &&
          grid.map((column, columnIndex) =>
            column.map((cell, cellIndex) => (
              <div
                key={`${columnIndex}-${cellIndex}`}
                style={{
                  border: "1px solid white",
                  backgroundColor: cell.village && "blue",
                }}
                onClick={() => {
                  cell.village &&
                    setVillage(
                      villages.find(
                        (village) => village.village_id === cell.village_id
                      )
                    )
                }}
              >
                <div
                  style={{
                    backgroundColor: cell.otherVillage && "red",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      backgroundColor:
                        cell.village_id === village.village_id && "green",
                      width: "100%",
                      height: "100%",
                    }}
                  ></div>
                </div>
              </div>
            ))
          )}
      </div>
      {/* <pre>{JSON.stringify(grid, null, 2)} </pre> */}
    </div>
  )
}

export default connect(null, { setVillage })(Map)
