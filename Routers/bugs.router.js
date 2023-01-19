const express = require("express")
const BugRouter = express.Router()
const { getBug, addBug, deleteBug, editBug }  = require("../Controllers/bugs.controller")
const {authenticate} = require("../MiddleWares/authenticate")


BugRouter.get("/", authenticate, getBug)
BugRouter.post("/add", authenticate, addBug)
BugRouter.delete("/delete/:bugId", authenticate, deleteBug)
BugRouter.patch("/edit/:bugId", authenticate, editBug)

module.exports = {BugRouter}