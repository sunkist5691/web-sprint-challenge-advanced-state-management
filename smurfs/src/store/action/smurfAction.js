import axios from 'axios'

export const postSmurfInfo = (info) => dispatch => {
   dispatch({ type: 'FETCH_JOBS_START' })
   axios
      .post('http://localhost:3333/smurfs', info)
      .then(res => {
         console.log('POST: ', res.data)
         dispatch({ type: 'FETCH_JOBS_SUCCESS', payload: res.data})
      })
}

export const getSmurfInfo = () => dispatch => {
   dispatch({ type: 'FETCH_JOBS_START'})
   axios
      .get('http://localhost:3333/smurfs')
      .then( res => {
         console.log('GET: ', res.data)
         dispatch({ type: 'FETCH_JOBS_SUCCESS', payload: res.data })
      })
}