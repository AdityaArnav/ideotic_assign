import React, { useEffect, useState } from 'react'

const Breed = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
    showData();
    },[])

    const link= `https://dog.ceo/api/breeds/list/all`;

    const showData = async()=>{
        try {
        let res = await fetch(link);
        let allData = await res.json();
        setData([allData]);
        }
        catch(error){
            console.log(error)
        }
    }

    console.log(data);
  return (
    <>
        <div>
            {
                data.map((el,i)=>{
                return (
                    <div key={i+1}>
                    <p>{el.message}</p>
                    <p>status: {el.status}</p>
                        
                    </div>
                )
                })
            }
        </div>
    </>
  )
}

export default Breed