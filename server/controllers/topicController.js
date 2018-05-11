const topic = require("../models/topics")
const jwt = require('jsonwebtoken');


module.exports = {
  addTopic: function(req, res) {
    const { title, content, phase, intro } = req.body
    const image = req.imageURL
    const newTopic = new topic({ title, content, phase, intro, image })

    newTopic
      .save(function(err, topic) {
        if (!err) {
          res
            .status(201)
            .json({
              message: 'added new topic',
              data: topic
            })
        } else {
          res
            .status(400)
            .json(err)
        }
      })
  },
  readTopicByPhase: function(req, res) {
    let token = req.headers.token;
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      console.log(decoded)

      topic
      .find({ phase: decoded.phase })
      .exec()
      .then(topics => {
        res
          .status(200)
          .json({
            message: 'topic list by phase',
            topicData: topics
          })
      })
      .catch(err => {
        res
          .status(400)
          .json(err)
      }) 
    })
  },
  readAllTopic: function(req, res) {
    topic
      .find()
      .exec()
      .then(topics => {
        res
          .status(200)
          .json({
            message: 'topic list',
            topicData: topics
          })
      })
      .catch(err => {
        res
          .status(400)
          .json(err)
      }) 
  },
  readTopicById: function(req, res) {
    topic
      .findById({
        _id: req.params.id
      }, function(err, result) {
        if (!err) {
          res
            .status(200)
            .json({
              result
            })
        } else {
          res
            .status(400)
            .json({
              err
            })
        }
      })
  },
  updateTopic: function(req, res) {
    const { title, content, phase, intro, image } = req.body

    topic
      .findByIdAndUpdate({
        _id: req.params.id
      }, req.body, function(err, updated) {
        if (!err) {
          res
            .status(200)
            .json({
              updated
            })
        } else {
          res
            .status(400)
            .json(err)
        }
      })
  },
  deleteTopic: function(req, res) {
    topic
      .findByIdAndRemove({
        _id: req.params.id
      }, function(err, deleted) {
        if (!err) {
          res
            .status(200)
            .json({
              message: 'topic deleted'
            })
        } else {
          res
            .status(400)
            .json(err)
        }
      })
  }
}