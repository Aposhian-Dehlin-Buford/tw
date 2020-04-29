import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = (dataName, axiosId = null) => {
    const url = `/api/${dataName}`
    const camelCaseDataName = dataName.substr(0, 1).toUpperCase() + dataName.substr(1).toLowerCase()
    const pluralName = `${dataName}s`
    const getAxios = `get${camelCaseDataName}s`
    const getSingleAxios = `get${camelCaseDataName}`
    const postAxios = `get${camelCaseDataName}`
    const putAxios = `put${camelCaseDataName}`
    const [axiosData, setAxiosData] = useState([])
    const [singleData, setSingleData] = useState({})
    useEffect(() => {
        if(axiosId){
            axios.get(`${url}/${axiosId}`).then(({data}) => setSingleData(data))
            .catch(err => console.log(err))
        }
        else{
            axios.get(`${url}s`).then(({data}) => setAxiosData(data)).catch(err => console.log(err))
        }
    }, [dataName, url])

    return {
        [dataName]: singleData,
        [pluralName]: axiosData,
        [getAxios]: () => {
            axios.get(`${url}s`).then(({data}) => setAxiosData(data)).catch(err => console.log(err))
        },
        [getSingleAxios]: (id) => {
            axios.get(`${url}/${id}`).then(({data}) => setAxiosData(data)).catch(err => console.log(err))
        },
        [postAxios]: (body) => {
            axios.post(url, body).then(({data}) => setAxiosData(data)).catch(err => console.log(err))
        },
        [putAxios]: (id, body) => {
            axios.put(`${url}/${id}`).then(({data}) => setAxiosData(data)).catch(err => console.log(err))
        },
        [deleteAxios]: (id) => {
            axios.delete(`${url}/${id}`).then(({data}) => setAxiosData(data)).catch(err => console.log(err))
        }
    }
}

export default useAxios