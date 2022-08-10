const express = require('express');
const {Mware1} = require('../Middlewares/Mwares');
const Router = express.Router();

Router.get('/',function(req,res)
{
    res.send('iam router');
})
Router.get('/data',MWare1,function(req,res)
{
    res.send('iam coming from mex');
})

module.exports = Router;