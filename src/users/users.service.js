// const User = require('./user.class');
import { User } from './user.entity';

const getUsers = async() => {
    let results = await User.findAll();
    console.log('results');
    console.log(results);
    let users = results.map(result =>{
        return result.dataValues;
    });
    console.log('users');
    console.log(users);
    return users;
}

const getUser = async(id) => {
    const user = await User.getId(id); 
    return user.dataValues;    
}

const createUser = async(user) => {
    return await User.create(user);
}

const updateUser = async(id,user) =>{
    return await User.updateId(user,id);
}

export default { getUsers, getUser, createUser ,updateUser};