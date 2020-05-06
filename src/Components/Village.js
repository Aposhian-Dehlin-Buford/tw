import React from 'react'
import {useSelector} from 'react-redux'

const Village = () => {
    const village = useSelector(({villageReducer}) => {
        return villageReducer.village})
    console.log(village)
    return (
        <div>
            <div>Village</div>
            {village.village_id && (
            <div>{village.village_name}</div>
            )}
        </div>
    )
}

export default Village