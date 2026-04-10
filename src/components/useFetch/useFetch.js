import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`${response.status} : ${response.statusText}`);
                }
                const data = await response.json()
                if(!data.results || data.results.length === 0){
                    throw new Error ("Data Kosong")
                }
                setData(data)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)

            }
        }
        fetchData()
    }, [url]);

    return { data, loading, error }
}

export default useFetch;