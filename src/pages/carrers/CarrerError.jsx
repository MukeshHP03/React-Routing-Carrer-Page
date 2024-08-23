import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const CarrerError = () => {
    const error = useRouteError();
  return (
    <div className='carrer-error'>
      <h2>Error!</h2>
      <p>{error.message}</p>
      <Link to='/'>Back To Homepage</Link>

    </div>
  )
}

export default CarrerError
