  require("dotenv").config();
  const path = require('path');
  const express = require('express');
  const connect = require('./configs/db');
  const PORT = process.env.PORT || 5000;
  const countryController = require('./controller/country.controller');
  const mailcontrol=require('./controller/mailer')
  const productController = require('./controller/product.controller')
  const country = require('./model/country.model')
 
  const app = express();
  app.enable('trust proxy');
  app.use(express.json());
  // Have Node serve the files for our built React app
  app.use(express.static(path.resolve(__dirname, '../client/build')));


  // app.use('/users', userController);
  app.use('/countries',countryController);
  app.use("/products", productController)



// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
const cors = require('cors')
app.use(cors());
app.use(express.json());


const {register,login}=require("./controller/auth.controller")
app.use("/register",register);
app.use("/login", login);


const usercontrol=require('./controller/user.controller')
app.use("/user", usercontrol);

app.use("/mailer",mailcontrol);

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