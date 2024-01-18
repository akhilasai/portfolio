import * as type from '../types';
import axios from 'axios';

export function getUserDetailsByUserName(dispatch,userName){
    axios.get(`${process.env.REACT_APP_URL}/user/${userName}`)
    .then((res)=>{
        console.log(res)
        if(res.data.length) dispatch(handleUserSuccess(res.data[0]))
    });
 }
export const handleUserSuccess=(data)=>{
    return {
        type:type.USER_DETAILS_SUCCESS,
        payload:data
    }
}

export const handleUserFailure=()=>{
    return {
        type:type.USER_DETAILS_FAILURE,
        payload:[]
    }
}