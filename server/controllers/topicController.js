const topic = require("../models/topics")

module.exports = {
  addTopic: function(req, res) {
    const { title, content, phase } = req.body
    const image = req.imageURL
    const newTopic = new topic({ title, content, phase, image })

    newTopic
      .save(function(err, topic) {
        if (!err) {
          res
            .status(201)
            .send({
              message: 'added new topic',
              data: topic
            })
        } else {
          res
            .status(400)
            .send(err)
        }
      })
  }
}