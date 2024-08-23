import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const About = () => {

  const[user, setUser] = useState('Mario');
  if(!user){
    return <Navigate to='/' replace={true} />
  }
  return (
    <div className='about'>
      <h2>About Us!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Exercitationem laudantium possimus ipsa itaque, nemo fugiat consequuntur, 
        nesciunt ratione debitis eligendi blanditiis esse reiciendis! Error sequi ducimus eligendi 
        voluptas fugiat ut.
        </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Exercitationem laudantium possimus ipsa itaque, nemo fugiat consequuntur, 
        nesciunt ratione debitis eligendi blanditiis esse reiciendis! Error sequi ducimus eligendi 
        voluptas fugiat ut.
        </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Exercitationem laudantium possimus ipsa itaque, nemo fugiat consequuntur, 
        nesciunt ratione debitis eligendi blanditiis esse reiciendis! Error sequi ducimus eligendi 
        voluptas fugiat ut.
        </p>
        <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

export default About
