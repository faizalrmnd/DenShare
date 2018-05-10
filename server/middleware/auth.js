var jwt = require('jsonwebtoken');
const users = require('../models/users');
var bcrypt = require('bcryptjs');
require('dotenv').config()

module.exports = {
  isUser(req, res, next){
    let token = req.headers.token;
    // console.log(token);
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if(token){
        users.findOne({_id: decoded.id })
             .then(users => {
              console.log('masuk 200, dapet user')

               // console.log(users);
               if(!users){
                  res.status(401).json({
                    message: "You need to Login"
                  })
               }else {
                 console.log('next')
                  next()
               }
             })
             .catch(err =>{
               console.log('masuk 500, gada user')
                res.status(500).json({
                  message: err
                })
             })
      }else{
        res.status(403).json({
          message: "You need to Login"
        })
      }
    });
  },
  isInstructor(req, res, next) {
    let token = req.headers.token;
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if(token) {
        users.findOne({_id: decoded.id })
            .then(users => {
              // console.log(users);
              if(!users){
                res.status(401).json({
                  message: "You are not authorized"
                })
              } else if (users.role == 'instructor') {
                next()
              } else {
                res.status(401).json({
                  message: "You are not authorized"
                })
              }
            })
            .catch(err =>{
              res.status(500).json({
                message: err
              })
            })
      } else {
        res.status(403).json({
          message: "You are not authorized"
        })
      }
    });
  }
};