// server side article routes

import express from 'express';

import ArticleController from '../controllers/article';

let router = express.Router();

router.get('/', ArticleController.getArticles);
router.get('/:id', ArticleController.getArticle);
router.post('/', ArticleController.postArticle);
router.put('/:id', ArticleController.updateArticle);
router.delete('/:id', ArticleController.deleteArticle);

export default router;
