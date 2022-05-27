import { GET_USER_INFO, GET_USER_INFO_FAIL, GET_USER_INFO_SECCESS } from "../ActionTypes/ActionTypes";

const initialState = {
    user: [],
    loading: true,
    error: null
};
const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_INFO:
            return { ...state, loading: true };
        case GET_USER_INFO_SECCESS:
            return { ...state, loading: false, user: payload, error: null };
        case GET_USER_INFO_FAIL:
            return { ...state, loading: false, user: null, error: payload };
        default:
            return state;
    }
}

export default UserReducer;