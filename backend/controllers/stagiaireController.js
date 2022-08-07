const mongoose = require ('mongoose')

const Stagiaire = require('../models/stagiaireModel')


const getStagiaires = async (req,res) => {
    const stagiaires = await Stagiaire.find();
    res.json(stagiaires)
}


const getStagiaireById = async (req,res) => {
    const stagiaire = await Stagiaire.findById(req.params.id)
    res.json(stagiaire)
}


const addStagiaire = async (req,res) => {
    const stagiaire = req.body;
    const newStagiaire = new Stagiaire(stagiaire)
    await newStagiaire.save()
    res.json(newStagiaire)
}


const updateStagiaire = async (req,res) => {
    const stagiaire = req.body;
    const _id = req.params.id;
    const updatedStagiaire = await Stagiaire.findByIdAndUpdate(_id,{...stagiaire,_id},{new : true});
    res.json(updatedStagiaire)
}


const deleteStagiaire = async (req,res) => {
    const _id = req.params.id;
    await Stagiaire.findByIdAndRemove(_id);
    res.json({message : "Deleted successfully"})
}


module.exports = {
    getStagiaires,
    getStagiaireById,
    addStagiaire,
    updateStagiaire,
    deleteStagiaire
}