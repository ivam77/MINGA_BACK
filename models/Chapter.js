import { Schema, model, Types } from "mongoose";

let collection = "chapters";
let schema = new Schema(
  {
    manga_id: { type: Types.ObjectId, ref: "mangas", require: true },
    title: { type: String, require: true },
    cover_photo: { type: String, require: true },
    pages: { type: Array, require: true },
    order: { type: Number, require: true },
    time_stamps: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const Chapter = model(collection, schema);
export default Chapter;
