// server side mongoose model for images

import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  title: String,
  filename: String,
});

imageSchema.methods.getUrl = function getUrl() {
  return 'uploads/' + this.filename;
};

export default mongoose.model('Image', imageSchema);
