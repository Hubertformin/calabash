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
    const {id, startDate, endDate, name, description, venue, imageUrl, ticketLimit, artists, createdAt, updatedAt} = req.body;
    EventEntity.update(req.params.id, {
        id,
        startDate, 
        endDate, 
        name, 
        description, 
        venue, 
        imageUrl, 
        ticketLimit,
        artists,
        createdAt, 
        updatedAt})
    .then(event => {
        res.json(event);
    })
    .catch(err => {
        res.status(400).end();
    });
});

//Create an event
EventRouter.post("/", (req, res) => {

});
