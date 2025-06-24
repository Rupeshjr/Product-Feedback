
        
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  marginBottom: '20px',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FeedbackFilters({ filterData, handleFilterChange}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={2}>
          <Item><Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="status"
          value={filterData.status}
          onChange={handleFilterChange}
          label="Status"
         
        >
            <MenuItem value={''}>All Status</MenuItem>
          <MenuItem value={'open'}>Open</MenuItem>
          <MenuItem value={'planned'}>Planned</MenuItem>
          <MenuItem value={'inprogress'}>In Progress</MenuItem>
          <MenuItem value={'done'}>Done</MenuItem>
         

        </Select>
      </FormControl>
    </Box></Item>
        </Grid>
        <Grid size={2}>
          <Item><Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='category'
          value={filterData.category}
          onChange={handleFilterChange}
          label="Category"
         
        >
          <MenuItem value={''}>All Categories</MenuItem>
          <MenuItem value={'feature'}>Feature</MenuItem>
          <MenuItem value={'bug'}>Bug</MenuItem>
          <MenuItem value={'ui'}>UI</MenuItem>
        </Select>
      </FormControl>
    </Box></Item>
        </Grid>
        <Grid size={2}>
          <Item><Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By  </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name='sort'
          value={filterData.SortBy}
          onChange={handleFilterChange}
          label="Sort By"
         
        >
        
          <MenuItem value={'asc'}>Ascending</MenuItem>
          <MenuItem value={'desc'}>Descending</MenuItem>
        </Select>
      </FormControl>
    </Box></Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}

    
