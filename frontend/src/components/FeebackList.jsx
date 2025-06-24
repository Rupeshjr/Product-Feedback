//FeedbackList.jsx
import React from 'react';
import FeedbackFilters from './FeedbackFilters';
import FeedbackItem from './FeedbackItem';
import { Stack } from '@mui/material';

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
      <Stack direction={'row'} sx={{ flexWrap: 'wrap' }} spacing={0}>
        {feedbackItems.map(item => (
          <FeedbackItem
            key={item._id}
            item={item}
            handleUpVote={handleUpvote}
            feedbacks={feedbackItems}
          />
        ))}
      </Stack>
    </div>
  );
}
