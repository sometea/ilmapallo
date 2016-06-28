// server side image routes

import express from 'express';
import multer from 'multer';

import ImageController from '../controllers/image';
import { isAuthenticated } from '../controllers/auth';

const router = new express.Router();

const dest = 'public/uploads';
const upload = multer({ dest });

router.post('/upload', isAuthenticated, upload.single('file'), ImageController.upload);

export default router;
