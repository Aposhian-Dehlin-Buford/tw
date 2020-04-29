import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

const useAuth = (adminRequired = false) => {
    const {user_id, is_admin} = useSelector(({authReducer}) => authReducer.user)
    const {push} = useHistory()
    useEffect(() => {
        if(!user_id){
            push('/login')
        }else if(adminRequired && !is_admin){
            push('/dashboard')
        }
    }, [user_id, is_admin])
}

export default useAuth