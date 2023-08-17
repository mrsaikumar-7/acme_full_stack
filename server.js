const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const router = require("./routes/eventRoute");
const users = require('./models/user');
app.use(cors())
app.use(express.json());

//connnect to mongoose
mongoose.connect("mongodb+srv://mrsaikumar:mrsaikumar@cluster0.8zu6a2n.mongodb.net/testAcme")

//require router
app.use('/',router)
app.use('/api/users',users)


app.listen(3001,function(){
    console.log("express server is running on port 3001")
});
