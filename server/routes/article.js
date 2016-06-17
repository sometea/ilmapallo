// server side article routes

import express from 'express';

import ArticleController from '../controllers/article';

import isAuthenticated from '../controllers/auth';

const router = new express.Router();

router.get('/', ArticleController.getArticles);
router.get('/:id', ArticleController.getArticle);
router.post('/', isAuthenticated, ArticleController.postArticle);
router.put('/:id', isAuthenticated, ArticleController.updateArticle);
router.delete('/:id', isAuthenticated, ArticleController.deleteArticle);

export default router;
