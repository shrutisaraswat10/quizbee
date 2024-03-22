import * as Action from '../redux/question_reducer'
import data,{answers} from '../database/data'

export const useFetchQestion = () => {
}
    
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); 
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); 
    } catch (error) {
        console.log(error)
    }
}