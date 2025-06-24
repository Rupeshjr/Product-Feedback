
import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FeedbackList from '../components/FeebackList';
import Button from '@mui/material/Button';
import CreateFeedback from '../components/CreateFeedback';

import AddIcon from '@mui/icons-material/Add';
export default function HomePage() {
  return (
    <div >
      <div className='header-grid'>
        <Typography variant="h4" gutterBottom>
          FeedbackHub
        </Typography>
        <CreateFeedback/>
        
     
      </div>
      <div className='subtitle-grid'>
        <Typography variant="subtitle1" gutterBottom>
          Share your feedback and ideas with us!
        </Typography>
      </div>

    
     
      <FeedbackList />
      
    </div>    
  );
}