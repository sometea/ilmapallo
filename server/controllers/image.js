// server side image controller

import Image from '../models/image';

class ImageController {
  upload(req, res) {
    if (req.file) return res.json({ success: true, message: 'File uploaded' });
    res.status(500);
    return res.json({ success: false, message: 'File upload failed' });
  }
}

export default new ImageController();
