// provide some mock data for the database

import mongoose from 'mongoose';

import Article from './models/article';
import User from './models/user';

/**
 * Configure database
 */
mongoose.connect('mongodb://localhost:27017/ilmapallo2');
mongoose.connection.on('error', () => {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});

// Article mock data
const ARTICLES = [
  { title: 'The first article', text: 'I don\'t know what happened.' },
  { title: 'The badgers are back', text: 'All the badgers have returned to their homes.' },
  { title: 'It\'s going well', text: 'What else is there left to say?' },
];

// User mock data
const USERS = [
  { name: 'user', password: 'user' },
  { name: 'david', password: 'david' },
];

Article.remove({}, (err) => {
  console.log('Articles removed.');
  for (const a of ARTICLES) {
    Article.create(a, (errc, article) => {
      if (errc) {
        console.log(errc);
        process.exit(1);
      }
      console.log(article);
    });
  }
});
User.remove({}, (err) => {
  console.log('Users removed.');
  for (const u of USERS) {
    User.create(u, (errc, user) => {
      if (errc) {
        console.log(errc);
        process.exit(1);
      }
      console.log(user);
      if (u === USERS.slice(-1)[0]) process.exit(0);
    });
  }
});
