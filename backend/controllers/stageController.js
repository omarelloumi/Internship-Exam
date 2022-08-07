const mongoose = require ('mongoose')

const Stage = require ('../models/stageModel')

const affectStage = async(req,res) => {
    const newStage = new Stage(req.body)
    await newStage.save()
    res.json(newStage)
}


module.exports = {
    affectStage
}