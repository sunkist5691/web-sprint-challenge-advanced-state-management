import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSmurfInfo, getSmurfInfo } from '../store/action/smurfAction'

import './smurfForm.css'

function SmurfForm(props) {

   const { postSmurfInfo, getSmurfInfo } = props

   const [info, setInfo] = useState({

      id: Date.now(),
      name: '',
      age: '',
      height: '',

   })

   const handleSubmit = (e) => {
      e.preventDefault()

      // POST smurf info that you just created
      // Because of if-statement, POST get runs first before GET request runs.
      // Also, it prevents to get failed POST request message from console when we hit submit with empty info
      if(parseInt(info.age) > 0){
         postSmurfInfo(info)
      }
      
      //GET list of smurfs data
      getSmurfInfo()

      setInfo({
         id: Date.now(),
         name: '',
         age: '',
         height: '',
      })
   }

   const handleChange = (e) => {

      setInfo({
         ...info,
         [e.target.id]: e.target.value
      })
   }

   console.log('FORMS: ', props)

   return (
      <div className='smurf___form'>
         <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
               Name <input id='name' value={info.name} onChange={handleChange}/>
            </label>

            <label htmlFor='age'>
               Age <input id='age' value={info.age} onChange={handleChange}/>
            </label>

            <label htmlFor='height'>
               Height <input id='height' value={info.height} onChange={handleChange}/>
            </label>
            <button type='submit'>Add Smurf</button>
         </form>
      </div>
   )
}

const mapStateToProps = state => {
  
   return {
      isFetching: state.isFetching,
      smurfList: state.smurfList,
      error: state.error,
   }
}

export default connect( mapStateToProps, { postSmurfInfo, getSmurfInfo } )(SmurfForm)
