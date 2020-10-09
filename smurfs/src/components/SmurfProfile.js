import React from 'react'
import './SmurfProfile.css'
import { Link } from 'react-router-dom' 

function SmurfProfile(props) {

   return (
      <Link to={`/profiles/${props.eachSmurf.id}`} style={{ textDecoration: 'none', color: 'black'}}>
         <div className='smurf___profile'>
            <h2>{props.eachSmurf.name}</h2>
            <p>age: {props.eachSmurf.age}</p>
            <p>height: {props.eachSmurf.height}</p>
         </div>
      </Link>
   )
}

export default SmurfProfile
