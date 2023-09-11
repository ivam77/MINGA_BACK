import { Schema, model, Types } from "mongoose";

let collection = "comments"
let schema = new Schema({
    chapter_id:{type:Types.ObjectId, ref:"chapters", required:true},
    user_id:{type:Types.ObjectId, ref:"users", require:true},
    comment:{type:String, require:true},
}, {
    timestamps:true
})

const Comment = model(collection, schema);
export default Comment;