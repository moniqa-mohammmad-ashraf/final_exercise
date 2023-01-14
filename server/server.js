const express = require('express');
const mongoose = require('mongoose');

const app = express();

const cors = require('cors');
const routes = require('./routes/routes');
const port = 3009;
require('dotenv').config();

mongoose.set("strictQuery", false);
mongoose.connect(
  'mongodb+srv://moniqa:123@cluster0.gvmskrp.mongodb.net/testAc',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
);

  // ...
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);


app.listen(port, () => console.log(`Server listening at port ${port}...`));







