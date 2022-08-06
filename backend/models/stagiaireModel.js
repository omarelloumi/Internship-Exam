const mongoose = require('mongoose');

const stagiaireSchema = mongoose.Schema({
    cin : String,
    nom : String,
    prenom : String,
    sex : String,
    email : String,
    tel : String,
    option : String
}) 


module.exports= mongoose.model('Stagiaire',stagiaireSchema)