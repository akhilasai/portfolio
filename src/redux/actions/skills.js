import * as type from '../types';
import axios from 'axios';

export function getSkillDetails(dispatch){
    axios.get(`${process.env.REACT_APP_URL}/skills`)
    .then((res)=>dispatch(handleSkillSuccess(res.data)));
 }
export const handleSkillSuccess=(data)=>{
    return {
        type:type.SKILLS_DETAILS_SUCCESS,
        payload:data
    }
}

export const handleSkillFailure=()=>{
    return {
        type:type.SKILLS_DETAILS_FAILURE,
        payload:[]
    }
}