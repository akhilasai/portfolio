import axios from 'axios';
import * as type from '../types';

/**
 * 
 * @param {function} onSuccess 
 * It will returns the data when connection made to the database and if data is present in the database then it retruns the data.
 */

export function getEducationDetails(dispatch,id){
    axios.get(`${process.env.REACT_APP_URL}/userEducation/${id}`)
    .then((res)=>{
        dispatch(handleEducationSuccess(res.data))
    });
}
export function addEducationDetails(body,onSuccess){
    axios.post(`${process.env.REACT_APP_URL}/education`,body,(res)=>onSuccess(res));
}
export const handleEducationSuccess=(data)=>{
    console.log("handleEducationSuccess data:",data)
    return {
        type:type.EDUCATION_DETAILS_SUCCESS,
        payload:data
    }
}

export const handleEducationFailure=()=>{
    return {
        type:type.EDUCATION_DETAILS_FAILURE,
        payload:[]
    }
}