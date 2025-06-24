import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material';

function ViewFeedback() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/feedbacks/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch feedback');
        }
        const data = await res.json();
        setFeedback(data.feedback);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setFeedback(null);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="40vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!feedback) {
    return (
      <Box p={3}>
        <Typography variant="h6" color="error">
          Feedback not found
        </Typography>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box p={3} maxWidth="600px" mx="auto">
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom>
          {feedback.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Category:</strong> {feedback.category}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Description:</strong> {feedback.description}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Status:</strong> {feedback.status}
        </Typography>
        <Box mt={3}>
          <Button variant="contained" onClick={() => navigate('/')}>
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default ViewFeedback;
