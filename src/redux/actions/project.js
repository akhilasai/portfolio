import * as type from '../types';
import axios from 'axios';

export function getProjectDetails(dispatch,id){
    axios.get(`${process.env.REACT_APP_URL}/userProject/${id}`)
    .then((res)=>dispatch(handleProjectSuccess(res.data)));
}

export const handleProjectSuccess=(data)=>{
    return {
        type:type.PROJECTS_DETAILS_SUCCESS,
        payload:data
    }
}

export const handleProjectFailure=()=>{
    return {
        type:type.PROJECTS_DETAILS_FAILURE,
        payload:[]
    }
}