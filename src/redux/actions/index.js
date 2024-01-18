import * as type from '../types';
import { getEducationDetails } from './education';
import { getProjectDetails } from './project';
import { getSkillDetails } from './skills';
// import { getUserDetails } from './user';

export const userSelect=(state)=>state.data.userData;

export const skillsSelect=(state)=>state.data.skillsData;

export const projectSelect=(state)=>state.data.projectData;

export const getAllDataApi=(dispatch,id)=>{
    getEducationDetails(dispatch,id);
    getProjectDetails(dispatch,id);
    getSkillDetails(dispatch,id);
    // getUserDetails(dispatch);
}
/**
 * 
 * @param {Array} data 
 * @returns It will accept the response from backend
 */
export const handleServiceSuccess=(data)=>{
    return {
        type:type.SERVICES_DETAILS_SUCCESS,
        payload:data
    }
}

export const handleServiceFailure=()=>{
    return {
        type:type.SERVICES_DETAILS_FAILURE,
        payload:[]
    }
}