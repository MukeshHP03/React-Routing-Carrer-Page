import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='page-not-found'>
      <h2>Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente rem dolorum dolore mollitia expedita voluptatem labore, fugit odit quae possimus ducimus accusamus quidem facilis delectus doloremque deserunt quasi optio quis!</p>
      <p>Go to the <Link to='/'>👈Home Page</Link>.</p>
    </div>
  )
}

export default NotFound
