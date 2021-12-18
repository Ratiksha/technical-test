import * as ActionTypes from '../Actions/Common/ActionTypes';

const initialState = {
    usersData: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return {
                ...state,
                usersData: action.payload,
            };
        default:
            return state;
    }
};

export default UserReducer;