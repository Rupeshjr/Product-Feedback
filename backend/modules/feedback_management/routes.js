//routes.js

const express = require('express');

const router = express.Router();

const feedbackController = require('./controller');
const authenticateToken = require('../../middlewares/authentication');

router.post('/', authenticateToken, feedbackController.createFeedback);
router.get('/', authenticateToken, feedbackController.getFeedbacks);
router.get('/:id', authenticateToken, feedbackController.getFeedbackById);
router.patch(
  '/:id/upvote',
  authenticateToken,
  feedbackController.feedbackUpVote
);

module.exports = router;
