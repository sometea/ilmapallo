// server side authentication routes

import express from 'express';

import AuthController from '../controllers/auth';

const router = new express.Router();

router.post('/authenticate', AuthController.authenticate);

export default router;
