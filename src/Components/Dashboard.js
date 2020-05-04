import React from 'react'
import useAuth from '../hooks/useAuth'
import Village from './Village'
import Villages from './Villages'

const Dashboard = (props) => {
    useAuth()
    return (
        <div>
            <div>Dashboard</div>
            <Village />
            <Villages />
        </div>
    )
}

export default Dashboard