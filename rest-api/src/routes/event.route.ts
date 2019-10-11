import { EventEntity } from "../entity/event.entity";

const express = require('express');
export const EventRouter = express.Router();

// Get all events
EventRouter.get('/', (req, res) => {
    EventEntity.find({
        relations: ["tickets"],
    })
    .then((events) => {
        res.json(events);
    }).catch(err => {
        res.status(400).end();
        console.error(err);
    });
});

// Get single event by id
EventRouter.get('/:id', (req, res) => {
    EventEntity.findOne(req.params.id)
    .then(event => {
        res.json(event);
    }).catch(err => {
        res.status(400).end();
        console.error(err);
    });
});

//Delete an event 
EventRouter.delete('/:id', (req, res) => {
    EventEntity.delete(req.params.id)
    .then(() => {
        res.json({});
    })
    .catch(err => {
        res.status(400).end();
    });
});

//Update an event 
EventRouter.post('/:id', (req, res) => {
    //Destructure event from request body
    const {startDate, endDate, name, description, venue, imageUrl, ticketLimit, artists} = req.body;
    EventEntity.update(req.params.id, {
        startDate, 
        endDate, 
        name, 
        description, 
        venue, 
        imageUrl, 
        ticketLimit,
        artists
    })
    .then(event => {
        res.json(event);
    })
    .catch(err => {
        res.status(400).end();
    });
});

//Create an event
EventRouter.put("/", (req, res) => {
    //destructure attributes from request body
    const {id, startDate, endDate, name, description, venue, imageUrl, ticketLimit, artists} = req.body;

    //Create event and return
    EventEntity.create({id, startDate, endDate, name, description, venue, imageUrl, ticketLimit, artists}).save()
    .then(event => {
        res.json(event);
    }).catch(err => {
        res.status(400).end();
    });
});

