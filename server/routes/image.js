// server side image routes

import express from 'express';
import multer from 'multer';

import ImageController from '../controllers/image';

const router = new express.Router();

const dest = 'public/uploads';
const upload = multer({ dest });

router.post('/upload', upload.single('file'), ImageController.upload);

export default router;
