// provide some mock data for the database

import mongoose from 'mongoose';

import Article from './models/article';

/**
 * Configure database
 */
mongoose.connect('mongodb://localhost:27017/ilmapallo2');
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

// Article mock data
const ARTICLES = [
  { title: 'The first article', text: 'I don\'t know what happened.' },
  { title: 'The badgers are back', text: 'All the badgers have returned to their homes.' },
  { title: 'It\'s going well', text: 'What else is there left to say?' }
];

Article.remove({}, function(err) {
   console.log('Articles removed');
   for (let a of ARTICLES) {
     Article.create(a, (err, article) => {
       if (err) {
         console.log(err);
         process.exit(1);
       }
       console.log(article);
       if (a === ARTICLES.slice(-1)[0]) process.exit(0);
     });
   };
});
