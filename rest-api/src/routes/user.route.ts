import { UserEntity } from "../entity/user.entity";

const express = require('express');
export const UserRouter = express.Router();

//Get all users
UserRouter.get('/', (req, res) => {
    UserEntity.find()
    .then((users) => {
        res.json(users);
    }).catch(err => {
        // TODO: reply with error status
        console.error(err);
        res.status(400).end();
    });
})

//Authenticate User
UserRouter.get('/auth/:username/:password', (req, res) => {
    const { username, password } = req.params;
    console.log('Authentication route..');
    UserEntity.findOne({
        where: {username, password}
    })
    .then((user) => {
        res.json(user);
    })
    .catch(err => {
        res.status(400).end()
    })
});

