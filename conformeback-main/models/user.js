const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

    UserName:{
        type: String,
        required: true,
    } ,
    LastName:{
        type: String,
        required: true,
    } ,
    Email :{
        type: String,
        required: true,
    } ,
    Phone :{
        type: String,
        required: true,
    } ,
    Password :{
        type: String,
        required: true,
    } ,

})
module.exports = mongoose.model('user', UserSchema)