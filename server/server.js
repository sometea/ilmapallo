'use strict';

// main express server for the backend

import express from 'express';
import path from 'path';
import logger from 'morgan';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';

import ArticleRouter from './routes/article.js';

let app = express();

/**
 * Configure database
 */
mongoose.connect('mongodb://localhost:27017/ilmapallo2');
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

app.use(passport.initialize());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'views')); // Set our views directory to be `/views`
app.set('view engine', 'pug'); // Set our view engine to be Pug
app.set('port', process.env.PORT || 3000);
app.use(logger('dev')); // Log requests to the console
app.use(bodyParser.json()); // Parse JSON data and put it into an object which we can access
app.use(methodOverride()); // Allow PUT/DELETE

app.get('/', (req, res) => {
  res.render('index'); // Compiles the file named "index" in the views directory (`/views`) using the view engine (Jade).
});

app.use('/articles', ArticleRouter);

app.listen(app.get('port'), function() {
  console.log(`App listening on port ${app.get('port')}!`);
});
