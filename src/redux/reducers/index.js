import * as type from "../types";

const initalState = {
  userData:{},
  educationData: [],
  projectData: [],
  skillsData: [],
  servicesData: [],
};
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case type.USER_DETAILS_SUCCESS:
      return {
        ...state,
        userData: action.payload,
      };
    case type.USER_DETAILS_FAILURE:
      return {
        ...state,
        userData: {},
      };
    case type.EDUCATION_DETAILS_SUCCESS:
      return {
        ...state,
        educationData: action.payload,
      };
    case type.EDUCATION_DETAILS_FAILURE:
      return {
        ...state,
        educationData: [],
      };
    case type.PROJECTS_DETAILS_SUCCESS:
      return {
        ...state,
        projectData: action.payload,
      };
    case type.PROJECTS_DETAILS_FAILURE:
      return {
        ...state,
        educationData: [],
      };
    case type.SKILLS_DETAILS_SUCCESS:
        return{
            ...state,
            skillsData:action.payload
        }
    case type.SKILLS_DETAILS_FAILURE:
        return{
            ...state,
            skillsData:[]
        }
    case type.SERVICES_DETAILS_SUCCESS:
        return{
            ...state,
            servicesData:action.payload
        }
    case type.SERVICES_DETAILS_FAILURE:
        return{
            ...state,
            servicesData:[]
        }
    default:
      return {
        ...state,
      };
  }
};
export default reducer;
