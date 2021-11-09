const mongoose = require("mongoose");

let replySchema = new mongoose.Schema({
    message: { type: String, trim:true, required: true },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
      },
    likes:{ type: Number, trim:true, required: true }
},
{ 
    versionKey: false,
    timestamps: true,
});

let Reply = mongoose.model("reply",replySchema);

module.exports = Reply;