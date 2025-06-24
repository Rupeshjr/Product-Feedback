//main.js

const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const cors = require('cors');
dotenv.config();

const feedbackRoutes = require('./modules/feedback_management/routes');


const app = express()
const port = 3000


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,    
    useUnifiedTopology: true,
    });


app.use(cors());
app.use(express.json());    
app.use('/api/feedbacks', feedbackRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});