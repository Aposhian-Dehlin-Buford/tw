import React from 'react'
import useAuth from '../hooks/useAuth'

const Dashboard = (props) => {
    useAuth()
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard