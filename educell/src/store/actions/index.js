import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('https://edu-cell.herokuapp.com/api/auth/login', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: [err.response.status, err.response.data.message] })
        });
}

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const signUp = userInfo => dispatch => {
    dispatch({ type: SIGN_UP_START });
    return axios.post('https://edu-cell.herokuapp.com/api/auth/register', userInfo)
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: SIGN_UP_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: SIGN_UP_FAILURE, payload: err.response.data })
        });
}

export const FETCH_SCHOOLS_START = 'FETCH_SCHOOLS_START';
export const FETCH_SCHOOLS_SUCCESS = 'FETCH_SCHOOLS_SUCCESS';
export const FETCH_SCHOOLS_FAILURE = 'FETCH_SCHOOLS_FAILURE';
export const schoolList = () => dispatch => {
    dispatch({ type: FETCH_SCHOOLS_START });
    return axios.get('https://edu-cell.herokuapp.com/schools')
        .then(res => {
            dispatch({ type: FETCH_SCHOOLS_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err));
}

export const DELETE_SCHOOLS_START = 'DELETE_SCHOOLS_START';
export const DELETE_SCHOOLS_SUCCESS = 'DELETE_SCHOOLS_SUCCESS';
export const DELETE_SCHOOLS_FAILURE = 'DELETE_SCHOOLS_FAILURE';
export const deleteSchool = id => dispatch => {
    dispatch({ type: FETCH_SCHOOLS_START });
    return axios.get('', id)
        .then(res => {
            dispatch({ type: DELETE_SCHOOLS_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err));
}

export const FETCH_STUDENT_START = 'FETCH_STUDENT_START';
export const FETCH_STUDENT_SUCCESS = 'FETCH_STUDENT_SUCCESS';
export const FETCH_STUDENT_FAILURE = 'FETCH_STUDENT_FAILURE';
export const studentList = () => dispatch => {
    dispatch({ type: FETCH_STUDENT_START });
    return axios.get('')
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export const ADD_STUDENT_START = 'ADD_STUDENT_START';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';
export const addStudent = info => dispatch => {
    dispatch({ type: ADD_STUDENT_START });
    return axios.post('', info)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export const UPDATE_STUDENT_START = 'UPDATE_STUDENT_START';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';
export const updateStudentList = data => dispatch => {
    dispatch({ type: UPDATE_STUDENT_START });
    return axios.put('', data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export const DELETE_STUDENT_START = 'DELETE_STUDENT_START';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';
export const deleteStudent = id => dispatch => {
    dispatch({ type: DELETE_STUDENT_START });
    return axios.delete('', id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export const FETCH_TEACHERS_START = 'FETCH_TEACHERS_START';
export const FETCH_TEACHERS_SUCCESS = 'FETCH_TEACHERS_SUCCESS';
export const FETCH_TEACHERS_FAILURE = 'FETCH_TEACHERS_FAILURE';
export const teacherList = () => dispatch => {
    dispatch({ type: FETCH_TEACHERS_START });
    return axios.get('')
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export const DELETE_TEACHERS_START = 'DELETE_TEACHERS_START';
export const DELETE_TEACHERS_SUCCESS = 'DELETE_TEACHERS_SUCCESS';
export const DELETE_TEACHERS_FAILURE = 'DELETE_TEACHERS_FAILURE';
export const deleteTeacher = id => dispatch => {
    dispatch({ type: DELETE_TEACHERS_START });
    return axios.delete('', id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

export const ADD_TEACHERS_START = 'ADD_TEACHERS_START';
export const ADD_TEACHERS_SUCCESS = 'ADD_TEACHERS_SUCCESS';
export const ADD_TEACHERS_FAILURE = 'ADD_TEACHERS_FAILURE';
export const addTeacher = info => dispatch => {
    dispatch({ type: ADD_TEACHERS_START });
    return axios.post('', info)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

