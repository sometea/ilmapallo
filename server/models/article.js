// server side mongoose model for articles

import mongoose from 'mongoose';

let articleSchema = new mongoose.Schema({
  title: String,
  text: String
});

export default mongoose.model('Article', articleSchema);
