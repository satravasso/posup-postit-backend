/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const PostItSchema = new mongoose.Schema({
  content: String,
});
