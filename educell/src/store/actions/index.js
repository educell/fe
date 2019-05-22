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