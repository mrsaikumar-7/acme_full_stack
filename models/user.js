const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname:{
    type:String,
    required:true,
    minlength:5,
    maxlength:40
  },
  username:{
    type:String,
    required:true,
    minlength:5,
    maxlength:40,
    unique:true
  },
  rollno:{
    type:String,
    required:true,
    minlength:10,
    maxlength:12,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    minlength:6,
    maxlength:255,
  },
  position:{
    type:String,
    required:true,
    minlength:6,
    maxlength:20,
  },
  year:{
    type:String,
    required:true,
    minlength:1,
    maxlength:10,
  },
  section:{
    type:String,
    required:true,
    minlength:1,
    maxlength:20,
  }

});
const User = mongoose.model('Event',userSchema);
module.exports = User; 
