const UserFeedback = require('./model');


async function createFeedback(userData) {
    const user = new UserFeedback({ 
        
        title: userData.title,
        category: userData.category,
        description: userData.description
    });
    return await user.save()

}

async function getFeedbacks(filters,sort) {
    console.log("sdf",filters,sort, sort === 'asc'?1:-1);
    const feedback = await UserFeedback.find(filters).sort({createdAt: sort === 'asc'?1:-1}); 
    return feedback;
  }

async function getFeedbackById(id) {
    const feedback = await UserFeedback.findById(id);
    return feedback;
  }

  async function feedbackUpVote(id) {
    const feedback = await UserFeedback.findByIdAndUpdate(id, { $inc: { upvote: 1 } }, { new: true });
    return feedback;
  }

  


module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
  feedbackUpVote
};