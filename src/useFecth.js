import { useState, useEffect } from "react";

export const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
            try{
            const response = await fetch(url)
            const jsonData = await response.json()
            setData(jsonData)
            }
            catch{
            setError(true)
            }
            finally{
            setLoading(false)
            }
        }

        fetchData();

      }, [])

    return [data, loading, error]
}
