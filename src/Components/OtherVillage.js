import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { useSelector } from "react-redux"

const OtherVillage = () => {
    const {village_id} = useParams()
    const {otherVillages} = useSelector(({villageReducer}) => villageReducer)
    const [{village_name}, setVillage] = useState({village_name: ''})
    const {push} = useHistory()

    useEffect(() => {
        if(!village_id){
            console.log('hit')
            push('/dashboard')
        }
        if(otherVillages && otherVillages.length > 0){
            setVillage(otherVillages.find(village => +village.village_id === +village_id))
        }
    }, [village_id, otherVillages])
    console.log(village_id)
    return (
        <div>
            <div>Other Village</div>
            <div>{village_name}</div>
        </div>
    )
}

export default OtherVillage