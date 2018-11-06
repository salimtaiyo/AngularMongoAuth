const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./route/user');
 
app.use(express.json());
app.use(cors());


mongoose
  .connect(
    "mongodb+srv://shal1231:Shal1231@cluster0-wlagw.mongodb.net/test?retryWrites=true", 
    {useNewUrlParser: true}
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use('/', userRoutes);

app.listen(3000, () => {
    console.log('running')
})