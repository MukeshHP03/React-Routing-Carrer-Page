import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

const CarrerDetails = () => {
    const fetchedData = useLoaderData();
    // const { id } = useParams();
  return (
    <div className='carrer-details-container'>
        <div className="carrer-details">
            <h2>Carrer Details for {fetchedData.title}</h2>
            <p>Starting Salary: {fetchedData.salary}</p>
            <p>Location: {fetchedData.location}</p>
            <p>Details: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dicta tenetur illum molestiae, tempore ea veniam iure doloremque optio, est ex, illo blanditiis.
                Quaerat sapiente veritatis blanditiis consectetur modi est quibusdam?
            </p>
        </div>
      
        <Link to='..' >👈 back</Link>

    </div>
  )
}

export default CarrerDetails

//loader function
export const CarrerDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id);
    if(!res.ok){
        throw new Error("This Not a right params");
    }
    return res.json();
}