import React, {useState, useEffect, useParams} from 'react'
import { useSelector } from "react-redux"

const OtherVillage = () => {
    const {village_id} = useParams()
    const {otherVillages} = useSelector(({villageReducer}) => villageReducer)
    const [{name}, setVillage] = useState({name: ''})

    useEffect(() => {
        setVillage(() => {
            otherVillages.find(village => +village.village_id === +village_id)
        })
    }, [village_id, otherVillages])
    return (
        <div>
            <div>Other Village</div>
            <div>{name}</div>
        </div>
    )
}

export default OtherVillage