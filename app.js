const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
//connect to mongoDB
const dbURI = 'mongodb+srv://rtwele:classics8@nodetuts.gp8b4.mongodb.net/node-practice?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

// app.set('view engine', 'ejs');

// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: 'new blog 2',
//     snippet: 'about my new blog',
//     body: 'more about my new blog'
//   });

//   blog.save()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//   Blog.findById('5fba910e9a93f134e84a615f')
//     .then(result => {
//       res.send(result);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });





// // app.get('/', (req, res) => {
// //     const blogs = [
// //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
// //   ];
// //   res.render('index', { title: 'Home', blogs});
// //   });

//   //middleware
// //   app.use((req, res, next) => {
// //     console.log('new request made:');
// //     console.log('host: ', req.hostname);
// //     console.log('path: ', req.path);
// //     console.log('method: ', req.method);
// //     next();
// //   });
// //   app.use((req, res, next) => {
// //     console.log('in the next middleware');
// //      next();
// //    });
  




// app.get('/about', (req, res) => {
//   res.render('about', { title: 'About' });
// });

// app.use('/blogs', blogRoutes);


 

//   // 404 page
//   app.use((req, res) => {
//     res.status(404).render('404', { title: '404' });
//   });

  

// //sending index.html
// app.get('/', (req, res) => {
//     // res.send('<p>Home Page</p>');
//     res.sendFile('./views/index.html', { root: __dirname });
// });

// //sending about.html
// app.get('/about', (req, res) => {
//     // res.send('<p>About Page</p>');
//     res.sendFile('./views/about.html', { root: __dirname });
// });

// //redirect to about page
// // app.get('/about-us', (req, res) => {
// //     res.redirect('/about');
// // });

// //add 404 page
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', { root: __dirname });
// });

