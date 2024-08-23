import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


const Carrer = () => {
    const carrersData = useLoaderData();
  return (
    <div className='carrers'>
      {
        carrersData.map(carrer => (
            <Link to={carrer.id.toString()} key={carrer.id}>
                <p>{carrer.title}</p>
                <p>Based in {carrer.location}</p>
            </Link>
        ))
      }
    </div>
  )
}

export default Carrer

//loading Data
export const carrersLoader = async() => {
    const res = await fetch('http://localhost:4000/careers');
    if(!res.ok){
      throw new Error("Could Not fetch the Carrer details")
    }
    return res.json();
}

