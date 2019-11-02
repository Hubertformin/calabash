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
        console.error(err);
        res.status(400).send('Failed to get events. Please try again later.');
    });
});

// Get single event by id
EventRouter.get('/:id', (req, res) => {
    EventEntity.findOne(req.params.id)
    .then(event => {
        res.json(event);
    }).catch(err => {
        console.error(err);
        res.status(400).send('Failed to get event. Please try again later');
    });
});

//Delete an event 
EventRouter.delete('/:id', (req, res) => {
    EventEntity.delete(req.params.id)
    .then(() => {
        res.json({});
    })
    .catch(err => {
        console.error(err)
        res.status(400).send('Failed to delete event. Please try again');
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
        console.error(err);
        res.status(400).send('Failed to update event; Please try again later.');
    });
});

//Create an event
EventRouter.put("/", (req, res) => {
    //destructure attributes from request body
    const {startDate, endDate, name, description, venue, imageUrl, ticketLimit, artists} = req.body;

    //Create event and return
    EventEntity.create({startDate, endDate, name, description, venue, imageUrl, ticketLimit, artists}).save()
    .then(event => {
        res.json(event);
    }).catch(err => {
        console.error(err);
        res.status(400).send('Failed to create event; Please try again later');
    });
});

