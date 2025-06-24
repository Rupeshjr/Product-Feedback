//FeedbackList.jsx
import React from 'react';
import FeedbackFilters from './FeedbackFilters';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({
  feedbackItems,
  filterData,
  handleFilterChange,
  handleUpvote,
}) {
  return (
    <div>
      <FeedbackFilters
        filterData={filterData}
        handleFilterChange={handleFilterChange}
      />
      <div className="feedback-list">
        {feedbackItems.map(item => (
          <FeedbackItem
            key={item._id}
            item={item}
            handleUpVote={handleUpvote}
          />
        ))}
      </div>
    </div>
  );
}
