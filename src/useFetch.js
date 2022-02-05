import {useEffect, useState} from 'react';
const useFetch = (url )=>{
    const [data , setData] = useState(null)
    //   loading message
    const [isPending , setIspending] = useState(true) 
    //handling error
    const [error , setError ] = useState(null)
//used to fetch data
    useEffect(()=>{
        setTimeout(() => {
         fetch(url)
         .then(res=>{
            if(!res.ok){
              throw Error('could not fetch data');
            } 
             return res.json()})
         .then(data=>{
             setData(data);
             setIspending(false);
             setError(null)
         })
         .catch(err =>{
             setError(err.message);
             setIspending(false)
         })
        }, 1000);
     },[url])
 return {
     error,
     isPending,
     data
 }
}
export default useFetch;