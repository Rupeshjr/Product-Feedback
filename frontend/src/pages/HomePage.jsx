import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import FeedbackList from '../components/FeebackList';

import CreateFeedback from '../components/CreateFeedback';
import { BACKEND_BASE_URL } from '../config';

export default function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [filterData, setFilterData] = useState({
    status: '',
    category: '',
    sort: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleFilterChange = e => {
    const { name, value } = e.target;
    setFilterData(prev => ({ ...prev, [name]: value }));
  };

  const fetchFeedbacks = async () => {
    try {
      const queryString = new URLSearchParams(filterData).toString();
      const response = await fetch(
        `${BACKEND_BASE_URL}/api/feedbacks?${queryString}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch feedback');
      }

      const data = await response.json();
      setFeedbackItems(data.feedbacks); // assuming { feedbacks: [...] }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    fetchFeedbacks();
  }, [filterData]);

  const handleUpvote = async id => {
    try {
      const response = await fetch(
        `${BACKEND_BASE_URL}/api/feedbacks/${id}/upvote`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Upvote request failed');
      }

      console.log('Feedback upvoted successfully');
      setSuccessMessage('Feedback upvoted successfully!');
      fetchFeedbacks();
    } catch (error) {
      console.error('Error upvoting feedback:', error);
    }
  };

  const handleCreateFeedback = async formData => {
    const response = await fetch(`${BACKEND_BASE_URL}/api/feedbacks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (!response.ok) {
      console.error('Failed to create feedback:', result);
      return;
    }
    fetchFeedbacks(); // Refresh the feedback list after creating a new feedback
    setSuccessMessage('Feedback created successfully!');
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage('');
  };

  return (
    <div>
      <div className="header-grid">
        <Typography variant="h4" gutterBottom>
          FeedbackHub
        </Typography>
        <CreateFeedback handleCreateFeedback={handleCreateFeedback} />
      </div>
      <div className="subtitle-grid">
        <Typography variant="subtitle1" gutterBottom>
          Share your feedback and ideas with us!
        </Typography>
      </div>

      <FeedbackList
        feedbackItems={feedbackItems}
        filterData={filterData}
        handleFilterChange={handleFilterChange}
        handleUpvote={handleUpvote}
      />
      <Snackbar
        open={successMessage.length > 0}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
