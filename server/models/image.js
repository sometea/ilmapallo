// server side mongoose model for images

import mongoose from 'mongoose';
import fs from 'fs';

const imageSchema = new mongoose.Schema({
  title: String,
  filename: String,
});

imageSchema.methods.getUrl = function getUrl() {
  return 'uploads/' + this.filename;
};

imageSchema.methods.deleteOldFile = function deleteOldFile(oldFilename) {
  // delete the old file if different from the new one
  if (oldFilename !== this.filename) {
    fs.unlink('public/uploads/' + oldFilename, (err) => {
      if (err) console.log('Removing old image file failed.');
    });
  }
};

imageSchema.methods.deleteFile = function deleteFile() {
  // convenience function to delete the file associated with this image, no questions asked
  fs.unlink('public/uploads/' + this.filename, (err) => {
    if (err) console.log('Removing image file failed.');
  });
};

export default mongoose.model('Image', imageSchema);
