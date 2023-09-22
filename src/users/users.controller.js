import userService from './users.service.js';

const getUsers = () => {
    try {
        console.log('userService.getUsers()');
        console.log(userService.getUsers());
        return userService.getUsers();

    } catch (error) {
        console.error(error);
    }

}

const createUser = (user) => {
    try {
        return userService.createUser(user);

    } catch (error) {
        console.error(error);
    }

}


export default { getUsers , createUser}