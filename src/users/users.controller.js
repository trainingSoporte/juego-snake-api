const userService = require('./users.service.js');

const getUsers = async() => {
    try {
        return await userService.getUsers();
    } catch (error) {
        console.error(error);
    }
}

const createUser = async(user) => {
    try {
        return await userService.createUser(user);
    } catch (error) {
        console.error(error);
    }
}

module.exports =  { getUsers , createUser};