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

  postImage(req, res) {
    Image.create({
      title: req.body.title,
      filename: req.body.filename,
    }, (err, image) => {
      if (err) return res.send(err);
      return res.json(image);
    });
  }
}

export default new ImageController();
