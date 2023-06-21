import { useEffect, useState } from "react"


export const useFetch = (url, arr = []) => {
            const [data, setData] = useState(null)

            useEffect(() => {
                fetch(url)
                .then((resp) => resp.json())
                .then((apiData) =>{
                    setData(apiData)
                })
                .catch((err) => console.log(err))
            },[arr])
    return {data} 
    
}