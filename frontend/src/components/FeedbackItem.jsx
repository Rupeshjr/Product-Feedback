//FeedbackItem.jsx
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginBottom: '20px',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
export default function FeedbackItem({ item, handleUpVote }) {
  return (
    <Item sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={11}>
          <Typography variant="h6" style={{ padding: '16px' }}>
            {item.title}
          </Typography>
          <Typography variant="body2" style={{ padding: '16px' }}>
            {item.description}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label={item.status} />
            <Chip label={item.category} />
          </Stack>
        </Grid>
        <Grid size={1}>
          <Button
            onClick={() => handleUpVote(item._id)}
            variant="contained"
            endIcon={<ArrowUpwardIcon />}
          >
            {' '}
            {item.upvote}
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Edit
          </Button>
        </Grid>
      </Grid>
    </Item>
  );
}
