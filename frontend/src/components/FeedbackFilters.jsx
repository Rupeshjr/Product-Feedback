import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(0.5), // Reduced padding
  textAlign: 'center',
  marginBottom: '20px',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles?.('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FeedbackFilters({ filterData, handleFilterChange }) {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <Item>
            <FormControl fullWidth size="small">
              <InputLabel id="status-label" sx={{ fontSize: '0.875rem' }}>
                Status
              </InputLabel>
              <Select
                labelId="status-label"
                id="status"
                name="status"
                value={filterData.status}
                onChange={handleFilterChange}
                label="Status"
                sx={{ minHeight: 16, minWidth: 120 }}
              >
                <MenuItem value={''}>All Status</MenuItem>
                <MenuItem value={'open'}>Open</MenuItem>
                <MenuItem value={'planned'}>Planned</MenuItem>
                <MenuItem value={'inprogress'}>In Progress</MenuItem>
                <MenuItem value={'done'}>Done</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>

        <Grid item>
          <Item>
            <FormControl fullWidth size="small">
              <InputLabel id="category-label" sx={{ fontSize: '0.875rem' }}>
                Category
              </InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={filterData.category}
                onChange={handleFilterChange}
                label="Category"
                sx={{ minHeight: 16, minWidth: 120 }}
              >
                <MenuItem value={''}>All Categories</MenuItem>
                <MenuItem value={'feature'}>Feature</MenuItem>
                <MenuItem value={'bug'}>Bug</MenuItem>
                <MenuItem value={'ui'}>UI</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>

        <Grid item>
          <Item>
            <FormControl fullWidth size="small">
              <InputLabel id="sortby-label" sx={{ fontSize: '0.875rem' }}>
                Sort By
              </InputLabel>
              <Select
                labelId="sortby-label"
                id="sortby"
                name="sort"
                value={filterData.SortBy}
                onChange={handleFilterChange}
                label="Sort By"
                sx={{ minHeight: 16, minWidth: 120 }}
              >
                <MenuItem value={'asc'}>Ascending</MenuItem>
                <MenuItem value={'desc'}>Descending</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
