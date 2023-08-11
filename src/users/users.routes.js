const express = require('express');
const router = express.Router();


router.get('/',(req, res) => {
    try {
        //getUsers
        console.log('getUsers');
        res.send('GET Users');
        res.status(200);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});


router.post("/" ,(req, res) => {
    try {
        //createUser
        console.log('createUser');
        res.status(201);

    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});

module.exports = router;

