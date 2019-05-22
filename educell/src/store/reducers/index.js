import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions';

const initialState = {
    students: [],
    schools: [],
    teachers: [],
    admins: [],
    token: '',
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
                token: action.payload.token,
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
        case SIGN_UP_START:
            return {
                ...state,
                isLoggingIn: true,
                error: '',
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                teachers: [],
                students: [],
                schools: [],
                isLoggingIn: false,
                isLoggedIn:true,
            }
        case SIGN_UP_FAILURE:
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