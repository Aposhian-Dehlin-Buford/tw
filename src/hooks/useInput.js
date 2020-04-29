import {useState} from 'react'

const useInput = (initialState) => {
    const [values, setValues] = useState(initialState)
    return [
        values,
        {
            setInput: (e) => {
                setValues({
                    ...values,
                    [e.target.name]: e.target.value,
                })
            }
        },
        resetInputs: () => {
            for(let key in values){
                setValues({[key]: ''})
            }
        }
    ]
}

export default useInput