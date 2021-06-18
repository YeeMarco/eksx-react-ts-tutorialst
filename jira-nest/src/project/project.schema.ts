import { Schema } from 'mongoose';

export const projectSchema = new Schema({
  _id: { type: String, required: true }, // 覆盖 Mongoose 生成的默认 _id
  create_time: { type: String, required: true },
  project_name: { type: String, required: true },
  owner: { type: String, required: true },
  edit_time: { type: String, required: true },
  members: { type: [String], required: false },
 
});