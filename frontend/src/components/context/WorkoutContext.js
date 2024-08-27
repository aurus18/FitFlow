import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext()

//reducer function to update the value of the state
export const workoutsReducer = (state,action) => {
  switch(action.type){
    case 'SET_WORKOUTS':
      return{
        workouts: action.payload    //returns a new state object which contains the list of workouts fetched.
      }
      case 'CREATE_WORKOUT':
        return{
          workouts: [action.payload, ...state.workouts]    //returns an array that combines the new workout with the existing workouts.
        }
      case 'DELETE_WORKOUT':
        return{
          workouts: state.workouts.filter((w) => w._id !== action.payload._id)
        }
      default:
        return state    //returns an unchanged state
  }
}

export const WorkoutsContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(workoutsReducer, {workouts: null})  //no workouts data available yet at the start of the application.
  
    return(

    //wraps the root App.js component, i.e., all components will have access to WorkoutsContext
    <WorkoutsContext.Provider value={{...state, dispatch}}>
      {children} 
    </WorkoutsContext.Provider>    
  )
}