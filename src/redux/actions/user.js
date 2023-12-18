import * as type from '../types';
import axios from 'axios';

export function getUserDetails(dispatch){
    axios.get(`${process.env.REACT_APP_URL}/users`)
    .then((res)=>{
        let userDetails=res.data.filter((val)=>val.email=='thummaakhilasai@gmail.com')[0];
        dispatch(handleUserSuccess(userDetails))
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