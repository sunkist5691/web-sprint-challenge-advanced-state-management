const initialState = {
   isFetching: false,
   smurfList: [],
   error: '',
}

export const smurfReducer = (state = initialState, action) => {

   switch(action.type){
      case 'FETCH_JOBS_START':
         return {
            ...state,
            isFetching: true,
         }

      case 'FETCH_JOBS_SUCCESS':
         return {
            ...state,
            isFetching: false,
            smurfList: action.payload,
         }
      case 'FETCH_JOBS_FAILED':
         return {
            ...state,
            isFetching: false,
            error: action.payload,
         }
      default:
         return state
   }

}