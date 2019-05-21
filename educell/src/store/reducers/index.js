import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
const initialState = {
    students: [],
    schools: [],
    teachers: [],
    admins: [],
    isLoggedIn: false,
    isLoggingIn: false,
    error: null,

};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                students: [],
                isLoggingIn: false,
                isLoggedIn: true,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default reducer;