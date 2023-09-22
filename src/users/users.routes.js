
const express = require('express');
const controller = require('./users.controller.js');
const userRouter = express.Router();

userRouter.get('/', async(req, res) => {
    try {
        console.log('getUsers');
        const users = await controller.getUsers();
        res.send(users);
        res.status(200);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

userRouter.post("/", async(req, res) => {
    try {
        console.log('createUser');
        const user = await controller.createUser(req.body);
        res.send(user);
        res.status(201);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

module.exports = userRouter;

