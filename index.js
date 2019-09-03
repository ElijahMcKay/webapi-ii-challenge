// API HERE
const express = require('express')

const server = express(); 

const posts = require('./data/db');

server.use(express.json()); 


// ======== Request Handlers =========

// --- GET Requests ---

server.get("/api/posts", (req, res) => {
    posts.find()
      .then(post => {
        res.status(200).json(post);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
  });

server.get("/api/posts/:id", (req, res) => {
    posts.find()
      .then(post => {
        res.status(200).json(post);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
});

server.get("/api/posts/:id/comments", (req, res) => {
    posts.find()
      .then(post => {
        res.status(200).json(post);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
});



  // ----- POST Requests -----
server.post('/api/posts', (req, res) => {
    
    posts.insert(req.body) 
        .then(post => {
            res.status(201).json(post); 
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add new user"
            }); 
        })
})

server.post('/api/posts/:id/comments', (req, res) => {
    posts.insert(req.body) 
        .then(post => {
            res.status(201).json(post); 
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add new comment"
            }); 
        })
})


// ---- PUT Requests ----
server.put('/api/posts/:id', (req, res) => {
    posts.update(req.params.id, req.body)
        .then(post => {
            res.status(201).json(post); 
        })
        .catch(err => {
            res.status(500).json({
                message: "Cannot access users data"
            });
        }) 
  
}) 


// ---- DELETE Request ----
server.delete('/api/posts/:id', (req, res) => {
    const id = req.params.id
    posts.remove(id)
        .then(post => {
            res.status(410).json(post); 
        })
        .catch(err => console.log(err)); 
})


server.listen(6000, () => console.log('API is running on port 6000!'))

