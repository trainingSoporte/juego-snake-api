

const users = [
    {
        userId: 1,
        name: 'Adrian Ojeda',
        email: 'aojeda@claro.com.ar'
    },
    {
        userId: 2,
        name: 'Adri++',
        email: 'otromail@claro.com.ar'
    },

]

const selectUsers = () => {
    return users;
}

const insertUsers = (user) => {
    return users.push(user);
}

export default { selectUsers, insertUsers }