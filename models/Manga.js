import { Schema, model, Types } from "mongoose";

let collection = "mangas"
let schema = new Schema({
    author_id:{type:Types.ObjectId, ref:"authors" , require:false},
    company_id:{type:Types.ObjectId, ref:"mangas" , require:false },
    title:{type:String, require:true},
    cover_photo:{type:String, require:true},
    description: {type: String, required: true},
    category_id:{type:Types.ObjectId, ref:"categories" , require:true },
    time_stamps:{type:String, require:true}
}, {
    timestamps:true
})

const Manga = model(collection, schema);
export default Manga;
