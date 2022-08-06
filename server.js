const express = require ('express');
const dotenv = require('dotenv').config();
const app = express();
const mongoose = require('mongoose')
const stagiaireRouter = require ('./backend/routes/stagiaireRoutes')

mongoose.connect(process.env.URL)

app.use(express.json())
app.use(express.urlencoded({extended : false}));

app.use('/api/stagiaires', stagiaireRouter);

app.listen(process.env.PORT , ()=>{
    console.log("server running on port "+process.env.PORT)
})