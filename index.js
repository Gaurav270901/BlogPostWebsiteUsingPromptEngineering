const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

let blogPosts = [];

// Middleware to parse form and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files like index.html, style.css, script.js
app.use(express.static(__dirname));

// POST route to receive new blog post submissions
app.post('/submit', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }

  const post = {
    title,
    content,
    date: new Date().toLocaleString()
  };

  blogPosts.push(post);

  // Redirect back to the homepage after submission
  res.redirect('/');
});

// GET route to send all blog posts as JSON
app.get('/posts', (req, res) => {
  res.json(blogPosts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
