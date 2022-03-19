
const express = require('express');
const User = require('../model/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// creating new user
router.post("/user", async (req, res) => {
    const user = new User(req.body);

    try {
      await user.save();
      const token = await user.generateToken();
      res.send({user,token});
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  });
  // login user
  router.post('/user/signIn',async (req,res)=>{
   let user = await User.findByCredentials(req.body.email,req.body.password);
   const token = await user.generateToken();
   res.send({user,token});
  })

const authenticate= require('../middleware/user')

  // find all users
  router.get("/users",authenticate ,async (req, res) => {
    console.log("xyz");
    try {
      const users = await User.find({});
      res.send(users);
    } catch (e) {
      res.send(e);
    }
  
  });
  // find user by name
  router.get("/user/:name", async (req, res) => {
    const Username = req.params.name;
    try {
      const user = await User.findOne({ name: Username });
      if (!user) {
        return res.status(404).send();
      }
      res.status(201).send(user);
    } catch (e) {
      res.status(501).send(e);
    }
  
  });
  //updating user by id
  
  router.patch('/user/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdate = ["name", "email", "password", "age"];
    const isValidOperation = updates.every((update) => {
      return allowedUpdate.includes(update);
    });
    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid Updates !!!" });
    }
    

    try {
      const user = await User.findById(req.params.id);
     updates.forEach((update)=>{
         user[update]= req.body[update];
     })
     await user.save();
      if (!user) {
       return  res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  })
  // find user by id and delete
  router.delete('/users/:id',async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
       return  res.status(404), send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send();
    }
  })
  
module.exports = router;