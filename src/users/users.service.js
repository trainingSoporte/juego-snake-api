// const User = require('./user.class');
const { User } = require('./users.entity.js');

const getUsers = async() => {
    let results = await User.findAll();
    console.log("🚀 ~ file: users.service.js:6 ~ getUsers ~ results:", results)

    let users = results.map(result =>{
        return result.dataValues;
    });
    console.log("🚀 ~ file: users.service.js:11 ~ users ~ users:", users)
    
    return users;
}

const getUser = async(id) => {
    const user = await User.getId(id); 
    return user.dataValues;    
}

const createUser = async(user) => {
    console.log("🚀 ~ file: users.service.js:23 ~ createUser ~ user:", user)
    return await User.create(user);
}

const updateUser = async(id,user) =>{
    return await User.updateId(user,id);
}

module.exports = { getUsers, getUser, createUser ,updateUser};