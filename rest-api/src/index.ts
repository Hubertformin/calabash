import "reflect-metadata";
import {createConnection} from "typeorm";
import { UserEntity} from "./entity/user.entity";
import { UserRouter } from "./routes/user.route";
import { EventRouter } from "./routes/event.route";

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // if(req.get('Authorization') != 'web-atalaku-cm') return res.status(401).jsonp(
    //     'Access Denied Fool: You think you can access our api without authentication. You  think we are amateurs??'
    // );
    next();
});

app.use(bodyParser.json());

//default route
app.get('/', (req, res) => {
    res.send('CALABASH MUSIC REST API');
});


createConnection()
.then(async () => {

    console.log("Inserting a new user into the database...");
    
    const user = await UserEntity.create({
        username: 'root',
        password: 'admin'
    }).save().catch(err => console.error(err));

    console.log("Saved a new user with id: " + user);

    console.log("Loading users from the database...");
    const users = await UserEntity.find();
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
    
    // routes
    // users route...
    app.use('/users', UserRouter);
    // event's route
    app.use('/events', EventRouter);


    const PORT = process.env.PORT || 5000;
    app.listen(PORT,  console.log(`Server started on port ${PORT}`));
}).catch(err => console.error(err));
