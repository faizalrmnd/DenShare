var express = require('express');
var router = express.Router();
const { addTopic } = require('../controllers/topicController');

const multer = require('multer')
const uploadMidleware = require('../middleware/upload')

const uploaderMem = multer({
  storage: multer.memoryStorage(),
  limits: {
      fileSize: 10 * 1024 * 1024
  }
})

// const middleware = require('../middlewares/auth')

// /* GET users listing. */
// router.get('/', middleware.isUser, questionController.getQuestion);
// router.get('/', middleware.isUser, questionController.getQuestion);
// router.post('/post', middleware.isUser, questionController.postQuestion);
// router.put('/update', middleware.isUser, questionController.updateQuestion);
// router.delete('/delete', middleware.isUser, questionController.removeQuestion);


/* GET main endpoint. */
router.post('/', uploaderMem.single('image'), uploadMidleware.upload, addTopic)

module.exports = router;