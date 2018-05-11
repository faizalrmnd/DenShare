const jwt = require('jsonwebtoken');
const users = require('../models/users');
const bcrypt = require('bcryptjs');
require('dotenv').config()



module.exports = {
  signUp: function(req, res) {
    users.findOne({
      email: req.body.email
    })
    .then(userData => {
      if(userData == null) {
        const saltRounds = 10;
        let pass = bcrypt.hashSync(req.body.password, saltRounds);
       

        let newUser = new users({
          name: req.body.name,
          email: req.body.email,
          password: pass,
          role: req.body.role,
          phase: req.body.phase
        })
    
        newUser.save((err, result) => {
          if(err) {
            console.log(err);
          } else {
            if (result.role === 'instructor') {
              console.log('HAHAHA');
              
              let token = jwt.sign({ id: result._id, email: result.email, role: result.role, phase: result.phase}, process.env.SECRET)
              res.status(201).json({
                
                message: 'successfully added a new user !',
                token: token,
                role: result.role,
                phase: result.phase
              })
            } else {
              let token = jwt.sign({ id: result._id, email: result.email, role: result.role, phase: result.phase }, process.env.SECRET)
              res.status(201).json({
                message: 'successfully added a new user !',
                token: token,
                role: result.role,
                phase: result.phase
              })
            }
          }
        })
      } else {
        res.status(400).json({
          msg: 'Username taken, pick another username!'
        })
      }
    })


  },
  signIn: function(req, res) {
    users
      .findOne({ email: req.body.email})
      .then(user => {
        if(bcrypt.compareSync(req.body.password, user.password)){
          
          let token = jwt.sign({ id: user._id, email: user.email, role: user.role, phase: user.phase }, process.env.SECRET)
          
          let userInfo = {
            name: user.name,
            email: user.username,
            role: user.role
          }
          res.status(200).json({
            token: token,
            user: userInfo,
            role: user.role,
            phase: user.phase
          })
        } else {
          res.status(500).json({
            msg: 'wrong password or username!'
          })
        }
      })
      .catch(err => {
        res.status(500).json({
          msg: 'wrong password or username!'
        })
      })
  },
  getAllStudent: function (req, res) {
    users.find({})
    .then(ListUser => {
      res.status(200).json({
        data: ListUser
      })
    })
  }
};