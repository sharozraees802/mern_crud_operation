const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();


const app = express();
 const port = process.env.PORT || 5000;

 app.use(cors());
 app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})


//const uri = process.env.ATLAS_URI;
const uri = process.env.MOGOOSEDB_URI;
mongoose.connect(uri,{useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true}) .then(() => {
        console.log('Database connected!')
      })
      .catch(err => {
        console.log('Could not connect', err.message)
      })

// const connection =mongoose.connection;
// connection.once('open',()=> console.log('connection statblish'))





app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
