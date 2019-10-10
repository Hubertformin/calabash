import { TicketEntity } from "../entity/ticket.entity";

const express = require("express");
export const TicketRouter = express.Router();

// Get all tickets 
TicketRouter.get("/", (req, res) => {
    TicketEntity.find()
    .then(tickets => {
        res.json(tickets);
    }).catch(err => {
        res.status(400).end();
    });
});

// Get a single ticket by id
TicketRouter.get("/:id", (req, res) => {
    TicketEntity.findOne(req.params.id)
    .then(ticket => {
        res.json(ticket);
    })
    .catch(err => {
        res.status(400).end();
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
        res.status(400).end();
    });
});