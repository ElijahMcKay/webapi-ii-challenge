// API HERE
const express = require('express')

const server = express(); 

const posts = require('./data/db');

server.use(express.json()); 


// ======== Request Handlers =========

// --- GET Requests ---

server.get("/api/posts", (req, res) => {
    users.find()
      .then(users => {
        res.status(200).json(posts);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
  });

server.get("/api/posts/:id", (req, res) => {
    users.find()
      .then(users => {
        res.status(200).json(posts);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
});

server.get("/api/posts/:id/comments", (req, res) => {
    users.find()
      .then(users => {
        res.status(200).json(posts);
      })
      .catch(() => {
        res.status(500).json({
          message: "Cannot access users data"
        });
      });
});



  // ----- POST Requests -----
server.post('/api/posts', (req, res) => {
    
    users.insert(req.body) 
        .then(user => {
            res.status(201).json(posts); 
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add new user"
            }); 
        })
})

server.post('/api/posts/:id/comments', (req, res) => {
    users.insert(req.body) 
        .then(user => {
            res.status(201).json(posts); 
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to add new user"
            }); 
        })
})


// ---- PUT Requests ----
server.put('/api/users/:id', (req, res) => {
    users.update(req.params.id, req.body)
        .then(user => {
            res.status(201).json(posts); 
        })
        .catch(err => {
            res.status(500).json({
                message: "Cannot access users data"
            });
        }) 
  
}) 


// 

