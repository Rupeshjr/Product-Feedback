//FeedbackItem.jsx
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

export default function FeedbackItem({ item, handleUpVote }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2, marginRight: 2 }}>
      <CardContent>
        <Typography variant="h6">{item.title}</Typography>
        <Typography
          variant="body2"
          sx={{
            width: '200px',
            height: '3em', // 1.5em * 2 lines
            lineHeight: '1.5',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'inline-block', // respects height
            verticalAlign: 'middle', // optional
          }}
        >
          {item.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={item.status} />
          <Chip label={item.category} />
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleUpVote(item._id)}
          variant="contained"
          endIcon={<ArrowUpwardIcon />}
        >
          {' '}
          {item.upvote}
        </Button>
        <Link to={`/feedbacks/${item._id}`}>
          <Button variant="outlined"> View</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
