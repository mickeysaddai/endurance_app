import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveAllUsers = (users) => ({
        type: RECEIVE_ALL_USERS,
        users
});

const receiveUser = (user) => ({
        type: RECEIVE_USER,
        user
});

const removeUser = userId => ({
    type: REMOVE_USER,
    userId

})

export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers().then(users => (
        dispatch(receiveAllUsers(users))
    ))
)

export const fetchUser = userId => dispatch => (
    UserAPIUtil.fetchUser(userId).then(user => (
        dispatch(receiveUser(user))
    ))
);
export const createUser = user => dispatch => (
    UserAPIUtil.createUser(user).then(user => (
        dispatch(receiveUser(user))
    ))
);
export const updateUser = user => dispatch => (
    UserAPIUtil.updateUser(user).then(user => (
        dispatch(receiveUser(user))
    ))
);
export const deleteUser = userId => dispatch => (
    UserAPIUtil.deleteUser(userId).then(() => (
        dispatch(removeUser(userId))
    ))
);
