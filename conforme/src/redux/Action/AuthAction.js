import axios from "axios";
import { GET_USER_INFO_FAIL, LOGIN, LOGIN_FAIL, LOGIN_SECCESS, LOGOUT, REGISTER, REGISTER_FAIL, REGISTER_SECCESS } from "../ActionTypes/ActionTypes"
import { GET_USER_INFO, GET_USER_INFO_SECCESS } from './../ActionTypes/ActionTypes';
import { useNavigate } from "react-router-dom";


export const login = (user) => async (dispatch) => {
    // const navigate =await useNavigate();

    dispatch({
        type: LOGIN
    });
    try {
        let res = await axios.post('/user/login', user)
        localStorage.setItem('token', res.data.token)

        // navigate("/audit");
        dispatch({
            type: LOGIN_SECCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data
        })
    }

}
export const register = (user) => async (dispatch) => {

    dispatch({
        type: REGISTER
    });
    try {
        let res = await axios.post('/user/register', user)
        localStorage.setItem('token', res.data.token)
        dispatch({
            type: REGISTER_SECCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data
        })
    }
}

export const getuserinfo = (token) => async (dispatch) => {
    dispatch({
        type: GET_USER_INFO,
    });
    try {
        let res = await axios.get('/user/getuserinfo', { headers: { 'authorization': token } })

        dispatch({
            type: GET_USER_INFO_SECCESS,
            payload: res.data
        })

    } catch (error) {
        console.log(token)
        dispatch({
            type: GET_USER_INFO_FAIL,
            payload: error.response.data
        })
    }

}


//deconnexion  
export const logout = () => async (dispatch) => {

    dispatch({
        type: LOGOUT
    })
    localStorage.removeItem("token");


}
