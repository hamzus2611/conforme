const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({

    Number1: Boolean,
    Number2: Boolean,
 
})
module.exports = mongoose.model('polsec', ProjetSchema)