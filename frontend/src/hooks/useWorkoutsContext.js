import { WorkoutsContext } from "../components/context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)    //this hook returns the value of WorkoutsContext, i.e., value = {{state, dispatch}}   

  if(!context){
    throw Error('useWorkoutsContext must be used inside an WorkoutsContextProvider')
  }

  return context
}