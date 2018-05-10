var express = require('express');
var router = express.Router();
const { addTopic, readAllTopic, readTopicById, readTopicByPhase, updateTopic, deleteTopic } = require('../controllers/topicController');

const multer = require('multer')
const middlewareAuth = require('../middleware/auth')
const middlewareUpload = require('../middleware/upload')

const uploaderMem = multer({
  storage: multer.memoryStorage(),
  limits: {
      fileSize: 10 * 1024 * 1024
  }
})

// /* GET users listing. */

router.get('/', middlewareAuth.isInstructor, readAllTopic);
router.get('/byphase', middlewareAuth.isUser, readTopicByPhase);
router.get('/:id', readTopicById);
router.post('/add', uploaderMem.single('image'), middlewareUpload.upload, addTopic);
router.put('/edit/:id', middlewareAuth.isInstructor, updateTopic);
router.delete('/delete/:id', middlewareAuth.isInstructor, deleteTopic);

module.exports = router;