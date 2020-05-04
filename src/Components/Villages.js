import React, {useEffect} from "react"
import useAxios from "../hooks/useAxios"
// import {setVillage, setVillages} from '../redux/villageReducer'
// import {connect} from 'react-redux'

const Villages = () => {
  const { villages } = useAxios("village")
  const { myVillages, otherVillages } = villages
//   useEffect(() => {
//       setVillages(villages)
//       setVillage(villages[0])
//   }, [])
  return (
    <div>
      {myVillages &&
        myVillages.map(({ village_name, village_id }) => (
          <div key={village_id}>{village_name}</div>
        ))}
    </div>
  )
}

export default Villages
// export default connect(null, {setVillage, setVillages})(Villages)
