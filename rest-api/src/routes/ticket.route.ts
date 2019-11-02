import { TicketEntity } from "../entity/ticket.entity";
import { EventEntity } from "../entity/event.entity";

const express = require("express");
export const TicketRouter = express.Router();

// Get all tickets 
TicketRouter.get("/", (req, res) => {
    TicketEntity.find()
    .then(tickets => {
        res.json(tickets);
    }).catch(err => {
        console.error(err);
        res.status(400).send('Failed to get tickets. Please try again later');
    });
});

// Get a single ticket by id
TicketRouter.get("/:id", (req, res) => {
    TicketEntity.findOne(req.params.id)
    .then(ticket => {
        res.json(ticket);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Error getting tickets; Please try again later");
    });
});

//Get a single ticket by purchase code
TicketRouter.get("/purchase-code/:purchaseCode", (req, res) => {
    TicketEntity.find({
        where: {
            purchaseCode: req.params.purchaseCode,
        }
    })
    .then(ticket => {
        res.json(ticket);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Error getting ticket; Please try again later");
    });
});

// Create a ticket
TicketRouter.put("/", (req, res) => {
    // Ticket details and event id sent in request body
    const {firstName, lastName, purchaseCode, event} = req.body;
    TicketEntity.create({firstName, lastName, purchaseCode, event}).save()
    .then(ticket => {
        res.json(ticket);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Error creating ticket; Please try again later");
    });
});

// Update a ticket
TicketRouter.post("/:id", (req, res) => {
    const {firstName, lastName, purchaseCode } = req.body;
    TicketEntity.update(req.params.id, {firstName, lastName, purchaseCode})
    .then(ticket => {
        res.json(ticket);
    })
    .catch(err => {
        console.log(err);
        res.status(400).send("Error updating ticket; Please try again later");
    });
});

// Delete a ticket
TicketRouter.delete("/:id", (req, res) => {
    TicketEntity.delete(req.params.id)
    .then(ticket => res.json({}))
    .catch(err => {
        console.log(err);
        res.status(400).send("Error deleting ticket; Please try again later");
    });
});