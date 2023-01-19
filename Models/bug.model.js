const mongoose = require("mongoose")

const bugSchema = mongoose.Schema({
    title: {type: String},
    severity : {type: String},
    userId : {type: String}
},
{
    versionKey : false
}
)

const BugModel = mongoose.model("bug", bugSchema);

module.exports = {BugModel}