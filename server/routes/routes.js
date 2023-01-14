const routes = require('express').Router();
const userController = require('../controllers/user.controller')
const User = require('../models/models');
const express = require("express");



// Create a new Excersice
routes.post('/createUser', userController.createUser);
routes.post('/AddUser', userController.AddUser);

// // Retrieve all Excersice
 routes.get("/", userController.findAll);



// // Retrieve a single Excersice with id
 routes.get("/:id", userController.findOne);

// Update a Excersice with id
routes.put("userUpdate/:id", userController.update);

// // Delete a Excersice with id
 routes.delete("/:id", userController.delete);

// // Delete all Excersice
 routes.delete("/", userController.deleteAll);

routes.use('/api/userController', routes);



module.exports = routes;
