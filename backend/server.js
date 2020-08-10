const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
const uri = process.env.MOGOOSEDB_URI;
mongoose.connect(uri, { useNewUrlParser: true,
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
