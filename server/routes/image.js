// server side image routes

import express from 'express';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

import ImageController from '../controllers/image';
import { isAuthenticated } from '../controllers/auth';

const router = new express.Router();

const dest = 'public/uploads';
const upload = multer({ storage: multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, buffer) => {
      const randomString = buffer.toString('hex');
      cb(null, randomString + path.extname(file.originalname));
    });
  },
}) });

router.post('/upload', isAuthenticated, upload.single('file'), ImageController.upload);
router.get('/', ImageController.getImages);
router.get('/:id', ImageController.getImage);
router.post('/', isAuthenticated, ImageController.postImage);
router.put('/:id', isAuthenticated, ImageController.updateImage);
router.delete('/:id', isAuthenticated, ImageController.deleteImage);

export default router;
