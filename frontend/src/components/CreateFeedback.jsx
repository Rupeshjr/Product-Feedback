import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#000',
};

export default function CreateFeedback({ handleCreateFeedback }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    handleCreateFeedback(formData);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>
        Submit Feedback
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>Submit New Feedback </h2>
          <Box component="form" autoComplete="off">
            <FormControl fullWidth sx={{ mb: 1 }}>
              <TextField
                required
                id="outlined-required"
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                defaultValue="Brief title for your feedback"
              />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 1 }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="category"
                value={formData.category}
                id="demo-simple-select"
                onChange={handleChange}
                label="Category"
              >
                <MenuItem>All Categories</MenuItem>
                <MenuItem value={'feature'}>Feature</MenuItem>
                <MenuItem value={'bug'}>Bug</MenuItem>
                <MenuItem value={'ui'}>UI</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 1 }}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                defaultValue="Provide detailed information about your feedback.."
              />
            </FormControl>
            <Stack direction="row" spacing={1}>
              <Button type="submit" variant="contained" disableElevation>
                Submit Feedback
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
