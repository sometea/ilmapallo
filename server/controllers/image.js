// server side image controller

import Image from '../models/image';

class ImageController {
  upload(req, res) {
    if (req.file) {
      return res.json({
        success: true,
        message: 'File uploaded',
        filename: req.file.filename,
      });
    }
    res.status(500);
    return res.json({ success: false, message: 'File upload failed' });
  }

  getImage(req, res) {
    Image.findById(req.params.id, (err, image) => {
      if (err) return res.send(err);
      return res.json(image);
    });
  }

  getImages(req, res) {
    Image.find({}, (err, images) => {
      if (err) return res.send(err);
      return res.json(images);
    });
  }

  postImage(req, res) {
    Image.create({
      title: req.body.title,
      filename: req.body.filename,
    }, (err, image) => {
      if (err) return res.send(err);
      return res.json(image);
    });
  }

  updateImage(req, res) {
    Image.findOneAndUpdate({ _id: req.body._id },
                           { title: req.body.title, filename: req.body.filename },
                           (err, image) => {
                             if (err) return res.send(err);
                             // if the filename changed, delete old file from disk:
                             image.deleteOldFile(req.body.filename);
                             return res.json(image);
                           });
  }

  deleteImage(req, res) {
    Image.findById(req.params.id, (err, image) => {
      if (err) return res.send(err);
      image.deleteFile();
      image.remove();
      Image.find({}, (err2, images) => {
        if (err2) return res.send(err2);
        return res.json(images);
      });
    });
  }
}

export default new ImageController();
