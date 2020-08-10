const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



mongoose.connect('mongodb+srv://sharoz:sharozkhan007@cluster0.ibezu.mongodb.net/MernCrudOperation?retryWrites=true&w=majority', { useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true }
).then(() => {
  console.log('Database connected!')
})
.catch(err => {
  console.log('Could not connect', err.message)
})


const exercisesRouter = require('./routes/exercises.routes');
const usersRouter = require('./routes/users.routes');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
