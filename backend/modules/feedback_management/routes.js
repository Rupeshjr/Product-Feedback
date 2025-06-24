//routes.js

const express = require('express');

const router = express.Router();

const feedbackController = require('./controller');


router.post('/', feedbackController.createFeedback);
router.get('/', feedbackController.getFeedbacks);
router.get('/:id', feedbackController.getFeedbackById); 
router.patch('/:id/upvote', feedbackController.feedbackUpVote);




module.exports = router;