// server side article controller

import sanitize from 'sanitize-html';

import Article from '../models/article';

function processText(text) {
  return sanitize(text, {
    allowedTags: ['b', 'em', 'strong', 'img', 'a', 'p', 'br'],
  });
}

class ArticleController {
  getArticles(req, res) {
    Article.find({}, (err, articles) => {
      if (err) return res.send(err);  // send errors back to the client
      return res.json(articles);
    });
  }

  getArticle(req, res) {
    Article.findById(req.params.id, (err, article) => {
      if (err) return res.send(err);
      return res.json(article);
    });
  }

  postArticle(req, res) {
    const newText = processText(req.body.text);
    Article.create({
      title: req.body.title,
      text: newText,
    }, (err, article) => {
      if (err) return res.send(err);
      return res.json(article);  // send back newly created article
    });
  }

  deleteArticle(req, res) {
    Article.remove({ _id: req.params.id }, (err1, article) => {
      if (err1) return res.send(err1);
      Article.find({}, (err2, articles) => {
        if (err2) return res.send(err2);
        return res.json(articles);
      });
    });
  }

  updateArticle(req, res) {
    const newText = processText(req.body.text);
    Article.findOneAndUpdate({ _id: req.body._id },
                             { title: req.body.title, text: newText },
                             (err, article) => {
                               if (err) return res.send(err);
                               return res.json(article);
                             });
  }
}

export default new ArticleController();
