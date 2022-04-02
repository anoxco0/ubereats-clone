  require("dotenv").config();
  const path = require('path');
  const express = require('express');
  const connect = require('./configs/db');
  const PORT = process.env.PORT || 5000;
  const countryController = require('./controller/country.controller');
  const country = require('./model/country.model')
  const app = express();
  
  app.use(express.json());
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  

  app.use('/users', userController);
  app.use('/countries',countryController);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, async()=>{
    try {
      await connect();
        console.log(`listening on ${PORT}....`)
    } catch (error) {
        console.log(error)
    }
})