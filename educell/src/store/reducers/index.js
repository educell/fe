import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';
import { SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../actions';
import { FETCH_SCHOOLS_START, FETCH_SCHOOLS_SUCCESS, FETCH_SCHOOLS_FAILURE } from '../actions';
import { FETCH_STUDENT_START, FETCH_STUDENT_SUCCESS, FETCH_STUDENT_FAILURE } from '../actions';
import { ADD_SCHOOLS_START, ADD_SCHOOLS_SUCCESS, ADD_SCHOOLS_FAILURE } from '../actions';
import { ADD_ITEM } from '../actions';

const initialState = {
    students: [],
    schools: [],
    teachers: [],
    admins: [],
    token: '',
    fetchSchool: false,
    isLoggedIn: false,
    isLoggingIn: false,
    error: null,
    todo: [
        {task: 'Talk To Mrs. Hoo', completed: false, id: 2},
    ],
    okToRender: false,
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
        case FETCH_SCHOOLS_START:
            return {
                ...state,
                fetchSchool: true,
                error: '',

            }
        case FETCH_SCHOOLS_SUCCESS:
            return {
                ...state,
                fetchSchool: false,
                schools: action.payload,
            }
        case FETCH_SCHOOLS_FAILURE:
            return {
                ...state,
                fetchSchool: false,
                error: action.payload,
            }
        case ADD_SCHOOLS_START:
            return {
                ...state,
                error: '',
            }
        case ADD_SCHOOLS_SUCCESS:
            return {
                ...state,
                schools: [...state.schools, action.payload],
            }
        case ADD_SCHOOLS_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case FETCH_STUDENT_START:
            return {
                ...state,
                error: '',
            }
        case FETCH_STUDENT_SUCCESS:
            return {
                ...state,
                students: action.payload,
            }
        case FETCH_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        case ADD_ITEM:
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {task: action.payload, completed: false, id: Date.now()}
                ]
            }
        default:
            return state;
    }
};

export default reducer;