const mongoose = require('mongoose')
const {BugModel} = require("../Models/bug.model")
const jwt = require("jsonwebtoken")


const getBug = async (req, res)=>{
    const token = req.headers?.authorization?.split(" ")[1];
try{
    var decoded = jwt.verify(token, 'secret');
const bugs = await BugModel.find({userId: decoded.userId})
    res.send({ bugs });
}catch(err){
    res.send({ err: "Something went wrong" });
}
}

const addBug = async (req, res)=>{
    const payload = req.body
try{
const bug = new BugModel(payload)
await bug.save()
res.send({ payload });
}catch(err){
    res.send({ "err": "Something went wrong" });
}
}

const deleteBug = async (req, res)=>{
    const {bugId} = req.params
    try{
    await BugModel.findByIdAndDelete({_id:bugId})
    res.send({ "msg": "Bug deleted" });
    }catch(err){
        res.send({ "err": "Something went wrong" });
    }
}

const editBug = async (req, res)=>{
    const {bugId} = req.params
    const payload = req.body
    try{
     await BugModel.findByIdAndUpdate({_id:bugId}, payload)
    res.send({ "msg": "Bug updated" });
    }catch(err){
        res.send({ "err": "Something went wrong" });
    }
}


module.exports = {
    getBug,
    addBug,
    deleteBug,
    editBug
}