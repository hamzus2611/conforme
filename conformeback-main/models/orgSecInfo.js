const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({

    Number1: Boolean,
    Number2: Boolean,
    Number3: Boolean,
    Number4: Boolean,
    Number5: Boolean,
    Number6: Boolean,
    Number7: Boolean,
 
})
module.exports = mongoose.model('orgSecInfo', ProjetSchema)