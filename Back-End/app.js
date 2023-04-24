const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
require ('dotenv').config();
const port = process.env.PORT || 8000;
const userRouter = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log('connected to mongoDB Atlas');
})
.catch((err)=>{
  console.log(`not connected to MongoDB Atlas: ${err}`);
});

app.use(express.json());
app.use(userRouter);
// testing 
 app.get('/', (req, res) => {
   res.json({ success: true, message: 'Welcome to backend zone!' });
 });

 app.listen(port,()=>console.log(`servidor escuchando en el puerto ${port}`));

 module.exports = app;