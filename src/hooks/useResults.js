import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default() => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (e) {
            setErrorMessage('Something went wrong, try again later')
        }
    }

    useEffect(() => {
        searchApi('pasta')
    }, [])
    
    return [searchApi, results, errorMessage]
}