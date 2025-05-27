// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for comments
let comments = [];
// Endpoint to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Endpoint to add a new comment

app.post('/comments', (req, res) => {
    const { author, content } = req.body;
    if (!author || !content) {
        return res.status(400).json({ error: 'Author and content are required' });
    }
    const newComment = { id: comments.length + 1, author, content };
    comments.push(newComment);
    res.status(201).json(newComment);
}
);
// Endpoint to delete a comment by ID
app.delete('/comments/:id', (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const commentIndex = comments.findIndex(c => c.id === commentId);
    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    comments.splice(commentIndex, 1);
    res.status(204).send();
});
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// Export the app for testing purposes
module.exports = app;
// Export the comments array for testing purposes
module.exports.comments = comments;
// Export the server port for testing purposes
module.exports.port = port;
