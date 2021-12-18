import * as UserActionType from '../Actions/Common/ActionTypes';

const getUsersList = (data) => {
    return {
        type: UserActionType.GET_USERS,
        payload: data,
    }
}

export { getUsersList }