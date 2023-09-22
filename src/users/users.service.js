import usersDB  from '../../database/adriDB/db.js';

const getUsers = () => {
    try {
        return usersDB.selectUsers();

    } catch (error) {
        console.error(error);
    }
}

const createUser = (user) => {
    try {
        _user={...{id:(users.length + 1)},...user}
        usersDB.insertUsers(_user)
        return _user;

    } catch (error) {
        console.error(error);
    }
}
export default { getUsers , createUser }