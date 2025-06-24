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
  color:'#000'
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/feedbacks', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });   
    const result = await response.json();
    console.log(result )

  };  
 

  return (
   <div>
      <Button onClick={handleOpen} variant="outlined" startIcon={<AddIcon />}>
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
            <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          defaultValue="Brief title for your feedback"
        />
        </div>
        <div>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name="category"
           value={formData.category}
          id="demo-simple-select"
          onChange={handleChange}
          label="Category"
         
        >
            <MenuItem  >All Categories</MenuItem>
          <MenuItem value={'feature'}>Feature</MenuItem>
          <MenuItem value={'bug'}>Bug</MenuItem>
          <MenuItem value={'ui'}>UI</MenuItem>
         

        </Select>
        </div>
        <div>
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
        </div>
        <div>
             <Button type="submit" variant="contained" disableElevation>
      Submit Feedback
    </Button>   
    
        <Button variant="outlined">Cancel</Button>
        </div> 
        </Box> 
        </Box>
      </Modal>
   
    </div>
  );
}
