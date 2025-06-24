const feedbackService = require('./service');

async function createFeedback(request, response) {
  const { title, category, description } = request.body;

  const result = await feedbackService.createFeedback({
    title,
    category,
    description
  });

  response.status(201).json({
    message: 'Feedback created successfully',
    user: result
  });
}

async function getFeedbacks(request, response) {
  try {
    const { category, status, sort } = request.query;
    console.log(request.query);
    const filters = {};

    // ✅ Case-insensitive filtering using RegExp
    if (category) {
      filters.category = new RegExp(`^${category}$`, 'i');
    }

    if (status) {
      filters.status = new RegExp(`^${status}$`, 'i');
    }
   
    const result = await feedbackService.getFeedbacks(filters, sort);

    response.status(200).json({
      feedbacks: result
    });

  } catch (error) {
    console.error("Error fetching filtered feedbacks:", error);
    response.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
  
}

async function getFeedbackById(request, response) {
  const { id } = request.params;
  const result = await feedbackService.getFeedbackById(id);
  if (!result) {
    return response.status(404).json({ message: 'Feedback not found' });
  }
  response.status(200).json({
    feedback: result
  });
}

async function feedbackUpVote(request, response) {
  const { id } = request.params;
  const result = await feedbackService.feedbackUpVote(id);
  if (!result) {
    return response.status(404).json({ message: 'Feedback not found' });
  }

  return response.status(200).json({
    message: 'Feedback upvoted successfully',
    feedback: result
  });
}

module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
  feedbackUpVote
};
