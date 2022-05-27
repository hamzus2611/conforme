const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjetSchema = new Schema({

    ProjetNumber: String,

    politiqueDeSecurite:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "polsec"
    }  , 
    organisationDeSecurite:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "orgSecInfo"
    },   
    SecuriteRH:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "SecRH"
    }, 
    gestionDesActifs:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "gesActif"
    },  
    controlAcces:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "controlAcc"
    },   
    
    cryptograghie:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "crypto"
    },   
    securiteExploitation:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "secExp"
    },   
    securiteCommunication:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "secCom"
    },  
    accDevMainSysInfo:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "aDMsysInfo"
    }, 
    relationsAvecFournisseurs:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "relationFour"
    }, 
    gestionIncidents:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "gestionIncidents"
    }, 
    gestionDeContinuite:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "continuiteAct"
    }, 
    conformite:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "conformite"
    }, 
       
  
 
 

})
module.exports = mongoose.model('projet', ProjetSchema)