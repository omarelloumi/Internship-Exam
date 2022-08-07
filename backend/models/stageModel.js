const mongoose = require('mongoose')

const stageSchema = mongoose.Schema({
    sujet: String,
    dateDebut: Date,
    dateFin: Date,
    stagiaire: { type: mongoose.Schema.Types.ObjectId, ref: 'Stagiaire'}
})

module.exports = mongoose.model('Stage',stageSchema)