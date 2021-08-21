import { GET_ERRORS, SET_CURRENT_USER } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utilis/setAuthHeader';

//Register user
export const registerUser = (userData,history) => dispatch => {
  axios
  .post('/api/users/register', userData)
  .then(res => {
    //Save the token to the local storage
    const token = res.data.token;
    localStorage.setItem('jwtToken', token);

    //set the authheader
    setAuthToken(token);

    //Decode the token
    const decoded = jwt_decode(token);
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    })
  })
  .catch(err => 
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })); 
}

//Login user
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}