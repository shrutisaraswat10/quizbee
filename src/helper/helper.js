import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function attempts_Number(result){
    return result;
}

export function earnPoints_Number(result, answers, point){
    return answers;
}

export function flagResult( earnPoints){
    return earnPoints; 
}

export function CheckUserExist({ children }){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to={'/'} replace={true}></Navigate>
}

