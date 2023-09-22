
import express from 'express';
import controller from './users.controller.js';
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    try {
        console.log('getUsers');
        const users = controller.getUsers();
        res.send(users);
        res.status(200);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

userRouter.post("/", (req, res) => {
    try {
        console.log('createUser');
        const user = controller.createUser(req.body);
        res.send(user);
        res.status(201);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

export default userRouter;

