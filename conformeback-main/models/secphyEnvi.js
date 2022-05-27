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
    Number8: Boolean,
    Number9: Boolean,
    Number10: Boolean,
    Number11: Boolean,
    Number12: Boolean,
    Number13: Boolean,
    Number14: Boolean,
    Number15: Boolean,


 
})
module.exports = mongoose.model('controlAcc', ProjetSchema)